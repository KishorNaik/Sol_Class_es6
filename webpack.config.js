var path = require("path");
const webpack = require('webpack');

module.exports = {
    //mode: "production",
    mode: "development",
    entry: {
       users:"./src/ClassDemo/users.js",
       userMain:"./src/ClassDemo/usersMain.js",
       parent:"./src/Inheritance/SingleInheritance/parent.js",
       child:"./src/Inheritance/SingleInheritance/child.js",
       staticDemo:"./src/StaticDemo/staticDemo.js",
       A:"./src/Inheritance/MultilevelInheritance/A.js",
       B:"./src/Inheritance/MultilevelInheritance/B.js",
       C:"./src/Inheritance/MultilevelInheritance/C.js",
       D:"./src/Inheritance/HierarchicalInheritance/D.js",
       E:"./src/Inheritance/HierarchicalInheritance/E.js",
       parentPoly:"./src/Polymorphisam/parent.js",
       childPoly:"./src/Polymorphisam/child.js"
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