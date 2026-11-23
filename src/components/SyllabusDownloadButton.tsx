import React from 'react';
import { Download, ExternalLink, BookOpen } from 'lucide-react';
import { getAssetUrl } from '../utils/assets';
import { ugcDocuments } from '../data/ugcDocuments';

interface SyllabusDownloadButtonProps {
  programId: string;
}

export const SyllabusDownloadButton: React.FC<SyllabusDownloadButtonProps> = ({ programId }) => {
  // Find the relevant syllabus document for this program
  // For instance, BBA syllabus
  const document = ugcDocuments.find(
    (doc) => doc.documentType === 'Syllabus' && doc.title.includes(programId)
  );

  if (!document) return null;

  const handleDownload = () => {
    const fullUrl = getAssetUrl(document.fileUrl);
    const link = document.createElement('a');
    link.href = fullUrl;
    link.download = `${document.title.replace(/\s+/g, '_')}.pdf`;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleOpen = () => {
    const fullUrl = getAssetUrl(document.fileUrl);
    window.open(fullUrl, '_blank');
  };

  return (
    <div className="bg-[#2e3192]/5 border border-[#2e3192]/15 rounded-xl p-6 mt-8 shadow-xs">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="flex items-center space-x-4">
          <div className="h-12 w-12 rounded-lg bg-[#2e3192] flex items-center justify-center text-[#fdb913]">
            <BookOpen className="h-6 w-6" />
          </div>
          <div>
            <h3 className="text-lg font-black text-[#2e3192]">Official UGC & University Syllabus</h3>
            <p className="text-sm text-gray-500">Academic Year {document.year}</p>
          </div>
        </div>
        
        <div className="flex items-center gap-3 w-full sm:w-auto">
          <button
            onClick={handleOpen}
            className="flex-1 sm:flex-none flex items-center justify-center px-4 py-2 bg-white text-[#2e3192] border border-[#2e3192]/30 rounded-lg font-bold hover:bg-gray-50 transition-colors text-xs uppercase tracking-wider"
          >
            <ExternalLink className="h-4 w-4 mr-2" />
            View
          </button>
          <button
            onClick={handleDownload}
            className="flex-1 sm:flex-none flex items-center justify-center px-4 py-2 bg-[#fdb913] hover:bg-[#e5a50b] text-[#2e3192] rounded-lg font-black transition-colors shadow-sm text-xs uppercase tracking-wider"
          >
            <Download className="h-4 w-4 mr-2" />
            Download
          </button>
        </div>
      </div>
    </div>
  );
};
