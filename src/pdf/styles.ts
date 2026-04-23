import { StyleSheet } from '@react-pdf/renderer';

// ATS-safe colour palette — greyscale only, no decorative elements
const COLORS = {
  name: '#0a0a0a',
  heading: '#0a0a0a',
  subheading: '#1a1a1a',
  body: '#1a1a1a',
  muted: '#555555',
  divider: '#cccccc',
};

// All sizes in pt (1 pt = 1/72 inch — standard PDF unit)
export const styles = StyleSheet.create({
  // ── Page ──────────────────────────────────────────────────────────────────
  page: {
    fontFamily: 'Helvetica',
    fontSize: 10.3,
    color: COLORS.body,
    paddingTop: 22,
    paddingBottom: 22,
    paddingHorizontal: 26,
    lineHeight: 1.36,
  },

  // ── Header ────────────────────────────────────────────────────────────────
  headerSection: {
    marginBottom: 12,
  },
  name: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 21,
    color: COLORS.name,
    letterSpacing: 0.3,
    marginBottom: 7,
  },
  jobTitle: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    color: COLORS.muted,
    marginBottom: 6,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  contactItem: {
    fontSize: 9.3,
    color: COLORS.muted,
  },
  contactSeparator: {
    fontSize: 9.3,
    color: COLORS.divider,
  },

  // ── Section ───────────────────────────────────────────────────────────────
  section: {
    marginBottom: 9,
  },
  sectionTitle: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 10.2,
    color: COLORS.heading,
    marginBottom: 4,
    paddingBottom: 2.5,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
  },

  // ── Experience & Education entries ────────────────────────────────────────
  entryWrapper: {
    marginBottom: 6,
  },
  entryHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 1,
  },
  entryTitle: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 10,
    color: COLORS.subheading,
  },
  entryDates: {
    fontFamily: 'Helvetica',
    fontSize: 9,
    color: COLORS.muted,
    textAlign: 'right',
  },
  entrySubtitle: {
    fontSize: 9.3,
    color: COLORS.muted,
    marginBottom: 2.5,
  },

  // ── Bullet points ─────────────────────────────────────────────────────────
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 1.5,
    paddingLeft: 1,
  },
  bullet: {
    fontFamily: 'Helvetica',
    fontSize: 9.7,
    color: COLORS.muted,
    width: 10,
    marginTop: 0,
  },
  bulletText: {
    fontFamily: 'Helvetica',
    fontSize: 9.5,
    color: COLORS.body,
    flex: 1,
    lineHeight: 1.34,
  },

  // ── Tools ────────────────────────────────────────────────────────────────
  toolsText: {
    fontFamily: 'Helvetica',
    fontSize: 9,
    color: COLORS.muted,
    marginTop: 2.5,
    marginBottom: 0,
  },
  toolsLabel: {
    fontFamily: 'Helvetica-Bold',
    color: COLORS.muted,
  },

  // ── Skills ────────────────────────────────────────────────────────────────
  skillRow: {
    flexDirection: 'row',
    marginBottom: 2.5,
    flexWrap: 'wrap',
  },
  skillCategory: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 9.5,
    color: COLORS.subheading,
    marginRight: 4,
  },
  skillItems: {
    fontFamily: 'Helvetica',
    fontSize: 9.5,
    color: COLORS.body,
    flex: 1,
    flexWrap: 'wrap',
  },

  // ── Summary ───────────────────────────────────────────────────────────────
  summaryText: {
    fontFamily: 'Helvetica',
    fontSize: 9.5,
    color: COLORS.body,
    lineHeight: 1.4,
  },
});
