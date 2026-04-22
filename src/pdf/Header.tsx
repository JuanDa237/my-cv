import { View, Text, Link } from '@react-pdf/renderer';
import { styles } from './styles';
import type { CVData } from '../types/cv';

interface Props {
  data: Pick<CVData, 'name' | 'title' | 'contact'>;
}

export default function Header({ data }: Props) {
  const { name, title, contact } = data;

  const contactItems = [
    { text: contact.email, href: `mailto:${contact.email}` },
    { text: contact.phone, href: `tel:${contact.phone}` },
    { text: contact.location, href: null },
    { text: contact.linkedin, href: contact.linkedin },
    { text: contact.github, href: contact.github },
    { text: contact.website, href: contact.website },
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
