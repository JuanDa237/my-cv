// Libs
import { PDFViewer } from '@react-pdf/renderer';

// Components
import CVDocument from '../pdf/CVDocument';
import DownloadCVButton from './DownloadCVButton';

// Types
import type { CVData } from '../types/cv';

interface Props {
  data: CVData;
}

export default function PDFPreview({ data }: Props) {
  return (
    <>
      <DownloadCVButton data={data} />

      <div
        style={{
          borderRadius: '4px',
          boxShadow: '0 2px 12px rgba(0,0,0,0.15)',
          display: 'inline-block',
        }}
      >
        <PDFViewer
          width="794"
          height="1123"
          style={{
            border: 'none',
            borderRadius: '4px',
          }}
        >
          <CVDocument data={data} />
        </PDFViewer>
      </div>
    </>
  );
}
