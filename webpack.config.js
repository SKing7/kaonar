var path = require('path');

module.exports = {
    entry: {
        'component/signup': ["./public/component/signup/index.js"],
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
    },
    externals: {
        react: 'React',
        jquery: "$"
    },
    devtool: '#source-map',
};
