import React, { createContext, useContext, useState, useEffect } from 'react';
import { getApiUrl } from '../utils/assets';

export interface User {
  id: number;
  username: string;
  role: 'admin' | 'admission_staff' | 'staff' | string;
  full_name: string;
  email: string;
}

interface AuthContextType {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (username: string, password: string) => Promise<{ success: boolean; message?: string }>;
  logout: () => Promise<void>;
  checkPermission: (permission: string) => boolean;
  getAuthHeaders: () => Record<string, string>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const ROLE_PERMISSIONS: Record<string, string[]> = {
  admin: [
    'news_manage',
    'faculty_manage',
    'gallery_manage',
    'achievers_manage',
    'admissions_view',
    'users_manage',
    'all_modules',
  ],
  admission_staff: ['admissions_view'],
  staff: ['gallery_manage', 'achievers_manage'],
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(() => {
    try {
      const stored = localStorage.getItem('pbs_auth_user');
      return stored ? JSON.parse(stored) : null;
    } catch {
      return null;
    }
  });
  const [token, setToken] = useState<string | null>(() => {
    return localStorage.getItem('pbs_auth_token');
  });
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    // Initial verification
    const verifySession = async () => {
      const savedToken = localStorage.getItem('pbs_auth_token');
      if (!savedToken) {
        setIsLoading(false);
        return;
      }

      try {
        const res = await fetch(getApiUrl('api/auth/verify.php'), {
          headers: {
            Authorization: `Bearer ${savedToken}`,
          },
        });
        if (res.ok) {
          const data = await res.json();
          if (data.authenticated && data.user) {
            setUser(data.user);
            localStorage.setItem('pbs_auth_user', JSON.stringify(data.user));
          } else {
            handleLogoutClean();
          }
        }
      } catch {
        // keep local state if network fails
      } finally {
        setIsLoading(false);
      }
    };

    verifySession();
  }, []);

  const handleLogoutClean = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem('pbs_auth_user');
    localStorage.removeItem('pbs_auth_token');
  };

  const login = async (username: string, password: string): Promise<{ success: boolean; message?: string }> => {
    try {
      const res = await fetch(getApiUrl('api/auth/login.php'), {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();

      if (res.ok && data.access_token) {
        setToken(data.access_token);
        setUser(data.user);
        localStorage.setItem('pbs_auth_token', data.access_token);
        localStorage.setItem('pbs_auth_user', JSON.stringify(data.user));
        return { success: true };
      }

      return { success: false, message: data.message || 'Login failed. Please check credentials.' };
    } catch {
      return { success: false, message: 'Server unreachable. Please try again.' };
    }
  };

  const logout = async (): Promise<void> => {
    try {
      if (token) {
        await fetch(getApiUrl('api/auth/logout.php'), {
          method: 'POST',
          headers: getAuthHeaders(),
        }).catch(() => {});
      }
    } finally {
      handleLogoutClean();
    }
  };

  const checkPermission = (permission: string): boolean => {
    if (!user) return false;
    if (user.role === 'admin') return true;
    const permissions = ROLE_PERMISSIONS[user.role] || [];
    return permissions.includes(permission) || permissions.includes('all_modules');
  };

  const getAuthHeaders = (): Record<string, string> => {
    const currentToken = token || localStorage.getItem('pbs_auth_token');
    if (currentToken) {
      return {
        Authorization: `Bearer ${currentToken}`,
      };
    }
    return {};
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user && !!token,
        isLoading,
        login,
        logout,
        checkPermission,
        getAuthHeaders,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
