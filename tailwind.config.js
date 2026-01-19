export default {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        dark: '#0A0A0A',
        darkGrid: '#0D1117',
        grayDark: '#1F2937',
        electricBlue: '#3B82F6',
        neonPurple: '#A855F7',
        neonGreen: '#00FFAB',
        card: '#111827',
      },
      boxShadow: {
        glow: '0 0 15px rgba(59,130,246,0.6)',
        neon: '0 0 20px rgba(168,85,247,0.6)',
      },
    },
  },
  plugins: [],
};