import { Document, Page, View, Text } from '@react-pdf/renderer';
import { styles } from './styles';
import Header from './Header';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import type { CVData } from '../types/cv';

interface Props {
  data: CVData;
}

export default function CVDocument({ data }: Props) {
  return (
    <Document title={`${data.name} — CV`} author={data.name} subject="Curriculum Vitae">
      <Page size="A4" style={styles.page}>
        <Header data={data} />
        {data.summary && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>Summary</Text>
            <Text style={styles.summaryText}>{data.summary}</Text>
          </View>
        )}
        <Experience items={data.experience} />
        <Education items={data.education} />
        <Skills items={data.skills} />
      </Page>
    </Document>
  );
}
