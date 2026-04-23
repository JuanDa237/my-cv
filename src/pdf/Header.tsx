import { View, Text, Link } from '@react-pdf/renderer';
import { styles } from './styles';
import type { CVData } from '../types/cv';

interface Props {
  data: Pick<CVData, 'name' | 'title' | 'contact'>;
}

export default function Header({ data }: Props) {
  const { name, title, contact } = data;

  const contactItems = [
    { text: contact.web, href: contact.web ? `https://${contact.web}` : null },
    { text: contact.linkedin, href: contact.linkedin ? `https://${contact.linkedin}` : null },
    { text: contact.github, href: contact.github ? `https://${contact.github}` : null },
    { text: contact.location, href: null },
    { text: contact.email, href: `mailto:${contact.email}` },
    { text: contact.phone, href: `tel:${contact.phone}` },
  ].filter(item => item.text);

  return (
    <View style={styles.headerSection}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.jobTitle}>{title}</Text>
      <View style={styles.contactRow}>
        <Text style={styles.contactItem}>
          {contactItems.map((item, i) => (
            <Text key={i}>
              {i > 0 && ' · '}
              {item.href ? (
                <Link src={item.href} style={{ color: styles.contactItem.color }}>
                  {item.text}
                </Link>
              ) : (
                item.text
              )}
            </Text>
          ))}
        </Text>
      </View>
    </View>
  );
}
