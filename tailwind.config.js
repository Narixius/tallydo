module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production' ? true : false,
    content: ['./src/**/*.html', './src/**/*.tsx'],
  },
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
};
