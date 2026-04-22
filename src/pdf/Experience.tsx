import { View, Text } from '@react-pdf/renderer';
import { styles } from './styles';
import type { Experience as ExperienceEntry } from '../types/cv';

interface Props {
  items: ExperienceEntry[];
}

export default function Experience({ items }: Props) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Experience</Text>
      {items.map((job, i) => (
        <View key={i} style={styles.entryWrapper}>
          <View style={styles.entryHeader}>
            <Text style={styles.entryTitle}>{job.title}</Text>
            <Text style={styles.entryDates}>
              {job.startDate} – {job.endDate}
            </Text>
          </View>
          <Text style={styles.entrySubtitle}>
            {job.company} · {job.location}
          </Text>
          {job.highlights.map((point, j) => (
            <View key={j} style={styles.bulletRow}>
              <Text style={styles.bullet}>•</Text>
              <Text style={styles.bulletText}>{point}</Text>
            </View>
          ))}
        </View>
      ))}
    </View>
  );
}
