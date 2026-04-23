import { View, Text } from '@react-pdf/renderer';
import { styles } from './styles';

interface Props {
  items?: string[];
}

export default function Languages({ items }: Props) {
  if (!items || items.length === 0) {
    return null;
  }

  return (
    <View style={styles.section}>
      <Text style={styles.sectionTitle}>Languages</Text>
      <Text style={styles.bulletText}>{items.join(' | ')}</Text>
    </View>
  );
}
