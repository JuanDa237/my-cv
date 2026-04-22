import { View, Text } from "@react-pdf/renderer";
import { styles } from "./styles";
import type { Education as EducationEntry } from "../types/cv";

interface Props {
  items: EducationEntry[];
}

export default function Education({ items }: Props) {
  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Education</Text>
      {items.map((edu, i) => (
        <View key={i} style={styles.entryWrapper}>
          <View style={styles.entryHeader}>
            <Text style={styles.entryTitle}>
              {edu.degree} in {edu.field}
            </Text>
            <Text style={styles.entryDates}>
              {edu.startDate} – {edu.endDate}
            </Text>
          </View>
          <Text style={styles.entrySubtitle}>
            {edu.institution}
            {edu.gpa ? ` · GPA: ${edu.gpa}` : ""}
          </Text>
          {edu.highlights?.map((point, j) => (
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
