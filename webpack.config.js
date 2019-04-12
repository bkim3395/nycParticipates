const path = require('path');

module.exports = {
    context: __dirname,
    entry: './lib/entry.js',
    output: {
        path: path.join(__dirname),
        filename: 'bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '*']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',

                },
            }
        ]
    },
    devtool: 'eval-source-map'
};

                    // query: {
                    //     presets: ['@babel/env', '@babel/react']
                    // }