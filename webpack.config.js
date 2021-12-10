const path = require("path");
const ProgressPlugin = require("progress-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CopyPlugin = require("copy-webpack-plugin");
const InterpolateHtmlPlugin = require('react-dev-utils/InterpolateHtmlPlugin');

let Env = "local";
let publicUrl = '';

let settings = {
    entry: {
        app: "./src/",
    },
    output: {
        path: path.join(__dirname, "build"),
        filename: "js/[name].js",
    },
    module: {
        rules: [
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: "ts-loader",
                        options: {
                            transpileOnly: true,
                        },
                    },
                ],
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loader: "babel-loader",
            },
            {
                test: /\.(sa|sc|c)ss$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    {
                        loader: "sass-loader",
                        options: {
                            // Prefer `dart-sass`
                            implementation: require("sass"),
                        },
                    },
                ],
            },
        ],
    },
    // devtool: 'eval-cheap-module-source-map',
    mode: "development",
    devServer: {
        open: {
            app: {
                name: 'chrome',
                arguments: ['--incognito', '--new-window'],
            },
        },
        host: "localhost",
        // static: {
      	// directory: path.join(__dirname,'..', 'public'),
        // },
        compress: true,
        port: 9000,
    },
    resolve: {
        enforceExtension: false,
        extensions: [".ts", ".tsx", ".js", ".jsx"],
    },
    plugins: [
        new ProgressPlugin({
            activeModules: false,
            entries: true,
            handler(percentage, message, ...args) {
                // custom logic
            },
            modules: true,
            modulesCount: 5000,
            profile: false,
            dependencies: true,
            dependenciesCount: 10000,
            percentBy: null,
        }),
        /* new HtmlWebpackPlugin({
            chunks: ["login"],
            template: "./src/login.html",
            filename: "login.html",
        }), */
        new HtmlWebpackPlugin({
            chunks: ["app"],
            template: "./src/index.html",
            //filename:"index.html"
        }),
        new InterpolateHtmlPlugin(HtmlWebpackPlugin, {
            PUBLIC_URL: publicUrl,
        }),
        new MiniCssExtractPlugin({
            filename: "css/[name].css",
        }),
        new CopyPlugin({
            patterns: [
                { from: "./public/", to: "./" },
            ],
        }),
    ],
    optimization: {
        // minimize: true,
		// minimizer: [new TerserPlugin()],
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/](react|react-dom)[\\/]/,
                    name: "vendor",
                    chunks: "all",
                },
            },
        },
    },
};

module.exports = (env, argv) => {
    if (argv.env.NODE_ENV == "production")
        settings.module.rules[2].use[0] = MiniCssExtractPlugin.loader;

    if (argv.mode === "production") settings.devtool = "source-map";

    return settings;
};
