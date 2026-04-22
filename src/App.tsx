import cvData from './data/cv-data.json';
import type { CVData } from './types/cv';
import PDFPreview from './preview/PDFPreview';
import './index.css';

const data = cvData as CVData;

function App() {
  return (
    <div className="app-shell">
      <PDFPreview data={data} />
    </div>
  );
}

export default App;
