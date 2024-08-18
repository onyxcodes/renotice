const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const config = {
    entry: './src/index.ts',
    experiments: {
        outputModule: true,
    },
    output: {
        path: path.resolve(__dirname, 'lib'),
        filename: 'index.js',
        globalObject: 'this',
        library: {
            type: 'module',
        },
    libraryTarget: 'commonjs'
    },
    externals: {
        // Use external version of React
        "react": {
            "commonjs": "react",
            "commonjs2": "react",
            "amd": "react",
            "root": "React"
        },
        "react-dom": {
            "commonjs": "react-dom",
            "commonjs2": "react-dom",
            "amd": "react-dom",
            "root": "ReactDOM"
        }
    },
    devtool: 'eval-source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [MiniCssExtractPlugin.loader,'css-loader'],
            },
            {
                test: /\.s[ac]ss$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {loader: 'css-loader', options: {modules: false}},
                    'sass-loader'
                ],
            },
            {
                test: /\.(tsx|ts)$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                      presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "index.css",
        }),
    ],
    resolve: {
        extensions: [
            '.js',
            '.jsx',
            '.tsx',
            '.ts',
            '.scss'
        ],
        // Add aliases to import modules easily
        alias: {
            'styles': path.resolve(__dirname, 'src/styles'),
            'components': path.resolve(__dirname, 'src/components'),
            'hooks': path.resolve(__dirname, 'src/hooks'),
            'utils': path.resolve(__dirname, 'src/utils'),
        }
    },
};

// Declare and add multiple configurations if needed
module.exports = () => {
    return [config];
}
