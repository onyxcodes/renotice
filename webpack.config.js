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
        react: 'react',
        reactDOM: 'react-dom'
    },
    devtool: 'source-map',
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
                test: /\.(ts|tsx)$/i,
                loader: 'ts-loader',
                exclude: ['/node_modules/'],
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
