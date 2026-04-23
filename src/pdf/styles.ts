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
    fontSize: 10,
    color: COLORS.body,
    paddingTop: 25,
    paddingBottom: 25,
    paddingHorizontal: 30,
    lineHeight: 1.4,
  },

  // ── Header ────────────────────────────────────────────────────────────────
  headerSection: {
    marginBottom: 14,
  },
  name: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 22,
    color: COLORS.name,
    letterSpacing: 0.4,
    marginBottom: 10,
  },
  jobTitle: {
    fontFamily: 'Helvetica',
    fontSize: 11,
    color: COLORS.muted,
    marginBottom: 8,
  },
  contactRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 4,
  },
  contactItem: {
    fontSize: 9,
    color: COLORS.muted,
  },
  contactSeparator: {
    fontSize: 9,
    color: COLORS.divider,
  },

  // ── Section ───────────────────────────────────────────────────────────────
  section: {
    marginBottom: 12,
  },
  sectionTitle: {
    fontFamily: 'Helvetica-Bold',
    fontSize: 10,
    color: COLORS.heading,
    marginBottom: 4,
    paddingBottom: 3,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.divider,
  },

  // ── Experience & Education entries ────────────────────────────────────────
  entryWrapper: {
    marginBottom: 8,
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
    fontSize: 9,
    color: COLORS.muted,
    marginBottom: 3,
  },

  // ── Bullet points ─────────────────────────────────────────────────────────
  bulletRow: {
    flexDirection: 'row',
    marginBottom: 2,
    paddingLeft: 2,
  },
  bullet: {
    fontFamily: 'Helvetica',
    fontSize: 10,
    color: COLORS.muted,
    width: 12,
    marginTop: 0,
  },
  bulletText: {
    fontFamily: 'Helvetica',
    fontSize: 9.5,
    color: COLORS.body,
    flex: 1,
    lineHeight: 1.45,
  },

  // ── Tools ────────────────────────────────────────────────────────────────
  toolsText: {
    fontFamily: 'Helvetica',
    fontSize: 9,
    color: COLORS.muted,
    marginTop: 3,
    marginBottom: 0,
  },
  toolsLabel: {
    fontFamily: 'Helvetica-Bold',
    color: COLORS.muted,
  },

  // ── Skills ────────────────────────────────────────────────────────────────
  skillRow: {
    flexDirection: 'row',
    marginBottom: 4,
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
    lineHeight: 1.5,
  },
});
