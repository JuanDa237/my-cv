import { Document, Page, View, Text } from '@react-pdf/renderer';
import { styles } from './styles';
import Header from './Header';
import Experience from './Experience';
import Education from './Education';
import Skills from './Skills';
import Languages from './Languages';
import type { CVData } from '../types/cv';

interface Props {
  data: CVData;
}

export default function CVDocument({ data }: Props) {
  const aboutMe = data.aboutMe?.content
    ? data.aboutMe
    : data.summary
      ? { title: 'About Me', content: data.summary }
      : undefined;

  return (
    <Document title={`${data.name} — CV`} author={data.name} subject="Curriculum Vitae">
      <Page size="A4" style={styles.page}>
        <Header data={data} />
        {aboutMe && (
          <View style={styles.section}>
            <Text style={styles.sectionTitle}>{aboutMe.title}</Text>
            <Text style={styles.summaryText}>{aboutMe.content}</Text>
          </View>
        )}
        <Experience items={data.experience} />
        <Education items={data.education} />
        <Skills items={data.skills} />
        <Languages items={data.languages} />
      </Page>
    </Document>
  );
}
