module.exports = {
    entry: {
        signup: "./js/component" 
    },
    output: {
        path: __dirname,
        filename: "bundle.js",
        path: path.join(__dirname, 'build'),
        filename: "[name].js",
        chunkFilename: "[name].js"
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: "style!css" }
        ]
    }
};
