module.exports = {
    plugins: [
        'tailwindcss',
        'postcss-flexbugs-fixes',
        [
            'postcss-preset-env',
            {
                autoprefixer: {
                    flexbox: 'no-2009'
                },
                state:3,
                features: {
                    'custom-properties':false
                }
            }
        ]
    ],
    purge: [
        './pages/**/*.js',
        './components/**/*.js'
    ]
}