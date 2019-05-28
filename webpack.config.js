var path = require("path");
const webpack = require('webpack');

module.exports = {
    //mode: "production",
    mode: "development",
    entry: {
       users:"./src/ClassDemo/users.js",
       userMain:"./src/ClassDemo/usersMain.js",
       parent:"./src/Inheritance/parent.js",
       child:"./src/Inheritance/child.js",
       staticDemo:"./src/StaticDemo/staticDemo.js"
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