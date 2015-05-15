var path = require('path');

module.exports = {
    entry: {
        'compoment/signup': ["./public/component/signup/index.js"],
        'user/signup': ["./public/page/user/signup.js"],
    },
    resolve: {
        alias: {
            components: path.join(__dirname, 'public', 'component'),
        },
        root: path.join(__dirname, 'public'),
        extensions: ['', '.js', '.jsx']
    },
    output: {
        sourceMapFilename: "[name].map",
        path: path.join(__dirname, 'public/build'),
        filename: "[name].js",
        chunkFilename: "[name].js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" },
            { test: /\.jsx$/, loader: "jsx-loader?harmony" },
            { test: /\.js$/, loader: "jsx-loader?harmony" },
        ]
    }
};
