import { View, Text } from "@react-pdf/renderer";
import { styles } from "./styles";
import type { CVData } from "../types/cv";

interface Props {
  data: Pick<CVData, "name" | "title" | "contact">;
}

export default function Header({ data }: Props) {
  const { name, title, contact } = data;

  const contactParts = [
    contact.email,
    contact.phone,
    contact.location,
    contact.linkedin,
    contact.github,
    contact.website,
  ].filter(Boolean) as string[];

  return (
    <View style={styles.headerSection}>
      <Text style={styles.name}>{name}</Text>
      <Text style={styles.jobTitle}>{title}</Text>
      <View style={styles.contactRow}>
        {contactParts.map((item, i) => (
          <View key={i} style={{ flexDirection: "row" }}>
            {i > 0 && <Text style={styles.contactSeparator}> · </Text>}
            <Text style={styles.contactItem}>{item}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}
