({
    baseUrl: "../src",
    name: "../src/vendor/almond.js",
    include: ['main'],
    insertRequire: ['main'],
    wrap: {
        startFile: '../build/start.frag',
        endFile: '../build/end.frag'
    },
    out: '../js/gremlins.min.js'
})
