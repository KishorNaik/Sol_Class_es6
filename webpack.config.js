var path = require("path");
const webpack = require('webpack');

module.exports = {
    entry: {
       users:"./src/ClassDemo/users.js",
       userMain:"./src/ClassDemo/usersMain.js"
    },
    output: {
        publicPath: "./dist/",
        path: path.join(__dirname, "./dist/"),
        filename: "[name].build.js",
        library: 'appGlobal'
    },
    module: {
        rules: [
            {
                test: /\.(ts|tsx)?$/,
                include: path.resolve(__dirname, './ts/'),
                use: [
                    {
                        loader: 'ts-loader'
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx', '.json']
    }
};