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
        extend: {
            colors: {
                'black-blue': '#21253F',
            },
        },
    },
    variants: {},
    plugins: [],
}
