import React, { useState } from 'react';
import { X, GraduationCap, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { getApiUrl } from '../utils/assets';

interface AdmissionEnquiryPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

const DEFAULT_WEBHOOK_URL = 'https://script.google.com/macros/s/AKfycbxMmxNthudndzCofkIhnfuFdm6POcAKFGMm0cMKKHf1ZFHNZodNe7fqnKXXnEKIdIBsyw/exec';

const AdmissionEnquiryPopup: React.FC<AdmissionEnquiryPopupProps> = ({ isOpen, onClose }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries()) as Record<string, string>;

    try {
      const googleSheetsUrl = import.meta.env.VITE_GOOGLE_SHEETS_WEBHOOK_URL || DEFAULT_WEBHOOK_URL;
      
      if (googleSheetsUrl) {
        const formParams = new URLSearchParams();
        formParams.append('student_name', data.student_name || '');
        formParams.append('phone', data.phone || '');
        formParams.append('email', data.email || '');
        formParams.append('program', data.program || '');
        formParams.append('source', 'Website Popup');
        formParams.append('timestamp', new Date().toLocaleString());

        await fetch(googleSheetsUrl, {
          method: 'POST',
          mode: 'no-cors',
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
          body: formParams.toString(),
        }).catch(err => console.warn('Google Sheets sync note:', err));
      }

      try {
        await fetch(getApiUrl('api/admissions/manage.php'), {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            student_name: data.student_name,
            phone: data.phone,
            email: data.email,
            program_interest: data.program,
            qualification: 'Website Enquiry',
            message: 'Submitted via website admission enquiry popup',
          }),
        });
      } catch (dbError) {
        console.warn('Database recording note:', dbError);
      }

      setIsSubmitted(true);
      e.currentTarget.reset();

      setTimeout(() => {
        setIsSubmitted(false);
        setIsSubmitting(false);
        onClose();
      }, 3000);
    } catch (err) {
      console.error('Submission error:', err);
      setError('Failed to submit enquiry. Please try again or call us directly.');
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-xs z-50 flex items-center justify-center p-4 animate-fade-in font-sans">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-full max-h-[90vh] overflow-y-auto border-t-4 border-[#fdb913] animate-scale-in">
        {/* Modal Header (NSAM PUC Royal Blue Style) */}
        <div className="bg-[#2e3192] text-white p-5 rounded-t-lg relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-1 rounded hover:bg-white/10 transition-colors"
            aria-label="Close"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="flex items-center space-x-3">
            <div className="bg-[#fdb913] p-2 rounded shadow">
              <GraduationCap className="h-6 w-6 text-[#2e3192]" />
            </div>
            <div>
              <h2 className="text-xl font-black uppercase tracking-wide">Admission Enquiry</h2>
              <p className="text-gray-200 text-xs mt-0.5">Admissions Open 2026-27 • MBA, MCA, BBA, BCA & B.Com</p>
            </div>
          </div>
        </div>

        {/* Modal Form / Success State */}
        <div className="p-6">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto shadow-inner">
                <CheckCircle2 className="h-9 w-9" />
              </div>
              <h3 className="text-xl font-black text-[#2e3192]">Enquiry Recorded!</h3>
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed max-w-xs mx-auto">
                Thank you for your interest. Your details have been submitted to our admissions desk. We will reach out to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {error && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded text-xs flex items-center space-x-2">
                  <AlertCircle className="h-4 w-4 text-red-600 flex-shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              <div>
                <label className="block text-xs font-bold text-[#37352f] uppercase tracking-wider mb-1">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="student_name"
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded text-xs sm:text-sm font-semibold text-[#37352f] focus:ring-2 focus:ring-[#2e3192] focus:bg-white outline-none transition-all"
                  placeholder="e.g. Rahul Sharma"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#37352f] uppercase tracking-wider mb-1">
                  Mobile Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded text-xs sm:text-sm font-semibold text-[#37352f] focus:ring-2 focus:ring-[#2e3192] focus:bg-white outline-none transition-all"
                  placeholder="e.g. 9876543210"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#37352f] uppercase tracking-wider mb-1">
                  Email ID *
                </label>
                <input
                  type="email"
                  name="email"
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded text-xs sm:text-sm font-semibold text-[#37352f] focus:ring-2 focus:ring-[#2e3192] focus:bg-white outline-none transition-all"
                  placeholder="e.g. rahul@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-[#37352f] uppercase tracking-wider mb-1">
                  Program of Interest *
                </label>
                <select
                  name="program"
                  className="w-full px-3.5 py-2.5 bg-gray-50 border border-gray-300 rounded text-xs sm:text-sm font-semibold text-[#37352f] focus:ring-2 focus:ring-[#2e3192] focus:bg-white outline-none transition-all"
                  required
                >
                  <option value="">--- Select Degree Course ---</option>
                  <option value="MBA">Master of Business Administration (MBA)</option>
                  <option value="MCA">Master of Computer Applications (MCA)</option>
                  <option value="BBA">Bachelor of Business Administration (BBA)</option>
                  <option value="BCom">Bachelor of Commerce (B.Com)</option>
                  <option value="BCA">Bachelor of Computer Applications (BCA)</option>
                </select>
              </div>

              {/* Data Consent Checkbox */}
              <div className="flex items-start space-x-2.5 p-3 bg-gray-50 rounded border border-gray-200">
                <input
                  type="checkbox"
                  id="consent_checkbox"
                  name="consent"
                  required
                  defaultChecked
                  className="mt-0.5 h-4 w-4 text-[#2e3192] focus:ring-[#2e3192] border-gray-300 rounded cursor-pointer shrink-0"
                />
                <label htmlFor="consent_checkbox" className="text-[11px] text-gray-600 leading-relaxed cursor-pointer select-none">
                  I give consent to Parivarthana Business School to record my details and contact me regarding admissions. *
                </label>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#fdb913] hover:bg-[#e5a50b] text-[#2e3192] py-3 px-6 rounded font-black text-xs sm:text-sm uppercase tracking-wider shadow-md hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-[#2e3192]"></div>
                    <span>Recording Enquiry...</span>
                  </>
                ) : (
                  <>
                    <Send className="h-4 w-4 text-[#2e3192]" />
                    <span>Submit Admission Enquiry</span>
                  </>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Footer Support Hotline */}
        <div className="bg-[#eeeded] p-3.5 rounded-b-lg text-center border-t border-gray-300 text-xs text-[#37352f]">
          For direct assistance call:{' '}
          <a href="tel:9740119888" className="text-[#2e3192] font-black hover:underline">
            9740119888
          </a>{' '}
          /{' '}
          <a href="tel:9740129888" className="text-[#2e3192] font-black hover:underline">
            9740129888
          </a>
        </div>
      </div>
    </div>
  );
};

export default AdmissionEnquiryPopup;
