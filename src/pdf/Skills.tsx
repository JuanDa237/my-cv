import { View, Text } from '@react-pdf/renderer';
import { styles } from './styles';
import type { SkillCategory } from '../types/cv';

interface Props {
  items?: SkillCategory[];
}

export default function Skills({ items }: Props) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Skills</Text>
      {items.map((group, i) => (
        <View key={i} style={styles.skillRow}>
          <Text style={styles.skillCategory}>{group.category}:</Text>
          <Text style={styles.skillItems}>{group.items.join(', ')}</Text>
        </View>
      ))}
    </View>
  );
}
