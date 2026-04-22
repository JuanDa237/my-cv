// Types
import type { CVData } from './types/cv';

// Components
import PDFPreview from './preview/PDFPreview';

// Data
import cvData from './data/cv-data.json';

const data = cvData as CVData;

function App() {
  return (
    <div className="app-shell">
      <PDFPreview data={data} />
    </div>
  );
}

export default App;
