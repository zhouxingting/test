module.exports = {
    "plugins": [
        require('postcss-flexbugs-fixes'),
        require('postcss-preset-env')({
          autoprefixer: {
            "browsers": [
                "ie >= 9",
                "ff >= 30",
                "chrome >= 34",
                "safari >= 7",
                "opera >= 23"
            ],
            flexbox: 'no-2009',
          },
          stage: 3,
        }),
    ]
}