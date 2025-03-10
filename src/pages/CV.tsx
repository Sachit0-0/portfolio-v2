import { Document, Page, pdfjs } from 'react-pdf';
import one from "@/assets/sachit.pdf";
import { useState } from 'react';
import { FaDownload } from 'react-icons/fa';

pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  'pdfjs-dist/build/pdf.worker.min.mjs',
  import.meta.url,
).toString();

export const CV: React.FC = () => {
  const [isDownloading, setIsDownloading] = useState(false);

  const downloadPdf = () => {
    setIsDownloading(true);
    const link = document.createElement('a');
    link.href = one;
    link.setAttribute('download', 'sachit.pdf');
    link.style.display = 'none';
    document.body.appendChild(link);
    link.click();
    link.remove();
    setIsDownloading(false);
  };

  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-6">
      <div className="pdf-container shadow-lg rounded-lg overflow-hidden">
        <Document file={one} renderMode="canvas">
          <Page
            pageNumber={1}
            renderTextLayer={false}
            renderAnnotationLayer={false}
            scale={2} // Increase the scale to improve quality
          />
        </Document>
      </div>
      <button
        className="flex items-center justify-center px-6 py-3 bg-primary rounded-full text-white shadow-md hover:bg-primary/80 transition-colors"
        onClick={downloadPdf}
        disabled={isDownloading}
      >
        <FaDownload className="mr-2" />
        Download CV
      </button>
    </div>
  );
};

