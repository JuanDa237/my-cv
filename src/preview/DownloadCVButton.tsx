// Libs
import { PDFDownloadLink } from '@react-pdf/renderer';

// Components
import CVDocument from '../pdf/CVDocument';

// Types
import type { CVData } from '../types/cv';

interface Props {
  data: CVData;
}

const filename = (name: string) => `${name.toLowerCase().replace(/\s+/g, '-')}-cv.pdf`;

export default function DownloadCVButton({ data }: Props) {
  return (
    <PDFDownloadLink
      document={<CVDocument data={data} />}
      fileName={filename(data.name)}
      style={{
        display: 'inline-block',
        padding: '10px 24px',
        background: '#111',
        color: '#fff',
        borderRadius: '6px',
        textDecoration: 'none',
        fontSize: '14px',
        fontFamily: 'system-ui, sans-serif',
        fontWeight: 500,
      }}
    >
      {({ loading }) => (loading ? 'Generating PDF…' : '⬇ Download CV')}
    </PDFDownloadLink>
  );
}
