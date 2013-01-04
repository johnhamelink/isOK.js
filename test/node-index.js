var qunit = require('qunit');

qunit.run({
    code: {

        // Include the source code
        path: './isOK.js',

        // What global var should it introduce for your tests?
        namespace: '$.fn.isOK'

    },
    tests: [

        // Include the test suite(s)
        'test.js'

    ].map(function (v) { return './test/' + v; })
});
