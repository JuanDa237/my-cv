import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import CVDocument from "../pdf/CVDocument";
import type { CVData } from "../types/cv";

interface Props {
  data: CVData;
}

const filename = (name: string) =>
  `${name.toLowerCase().replace(/\s+/g, "-")}-cv.pdf`;

export default function PDFPreview({ data }: Props) {
  return (
    <>
      <PDFDownloadLink
        document={<CVDocument data={data} />}
        fileName={filename(data.name)}
        style={{
          display: "inline-block",
          padding: "10px 24px",
          background: "#111",
          color: "#fff",
          borderRadius: "6px",
          textDecoration: "none",
          fontSize: "14px",
          fontFamily: "system-ui, sans-serif",
          fontWeight: 500,
        }}
      >
        {({ loading }) => (loading ? "Generating PDF…" : "⬇ Download CV")}
      </PDFDownloadLink>

      <PDFViewer
        width="794"
        height="1123"
        style={{
          border: "none",
          borderRadius: "4px",
          boxShadow: "0 2px 12px rgba(0,0,0,0.15)",
        }}
      >
        <CVDocument data={data} />
      </PDFViewer>
    </>
  );
}
