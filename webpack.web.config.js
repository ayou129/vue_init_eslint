var path = require('path');
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
//自动清理文件
const CleanWebpackPlugin = require("clean-webpack-plugin")
//提取文本（CSS）到单独的文件
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
//压缩css文件
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin")
//压缩js文件
const TerserJSPlugin = require("terser-webpack-plugin")
//检查打包问题大小
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
//cdn
const WebpackCdnPlugin = require('webpack-cdn-plugin');
//webpack 只接受两个参数 env环境 argv参数
module.exports = (env, argv) => {
    console.log(env)
    const devMode = env == 'production' ? false : true;
    let plugins = [
        new VueLoaderPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "src/pages/web/template.html"),
            cdnModule: 'vue',
            title: "Web",
        }),
        // new BundleAnalyzerPlugin(),
        new WebpackCdnPlugin({
            prodUrl: "https://cdn.bootcss.com/:name/:version/:path",
            modules: {
                'vue': [{
                        name: 'normalize.css',
                        style: 'normalize.min.css',
                        cssOnly: true,
                        prodUrl: "https://cdn.bootcss.com/normalize/:version/:path",
                    }, {
                        name: 'nprogress',
                        var: 'NProgress',
                        path: 'nprogress.min.js',
                        style: "nprogress.min.css",
                    }, {
                        name: 'js-cookie',
                        var: 'Cookies',
                        path: 'js.cookie.min.js',
                    }, {
                        name: 'axios',
                        var: 'axios',
                        path: 'axios.min.js',
                    },
                    {
                        name: 'vue',
                        var: 'Vue',
                        path: 'vue.min.js',
                    },
                    {
                        name: 'vue-router',
                        var: 'Router',
                        path: 'vue-router.min.js',
                    },
                    {
                        name: 'vuex',
                        var: 'Vuex',
                        path: 'vuex.min.js',
                    },
                    {
                        name: 'element-ui',
                        var: 'ELEMENT',
                        path: 'index.js',
                        style: "theme-chalk/index.css",
                    }
                ],
            },
            publicPath: '/node_modules'
        })
    ];
    let optimization = {
        //这里处理重复的代码块，是否过滤，后期研究
        splitChunks: {
            chunks: 'async',
            minSize: 30000,
            maxSize: 0,
            minChunks: 1,
            maxAsyncRequests: 5,
            maxInitialRequests: 3,
            automaticNameDelimiter: '~',
            name: true,
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    priority: -10
                },
                default: {
                    minChunks: 2,
                    priority: -20,
                    reuseExistingChunk: true
                }
            }
        },
        minimizer: []
    };
    if (!devMode) {
        plugins.push(
            new CleanWebpackPlugin({
                root: path.resolve(__dirname),
                cleanOnceBeforeBuildPatterns: "dist/*.*",
                verbose: true, //开启在控制台输出信息
                // dry: true //启用删除文件
            }),
            //提取css到某个文件，下方rules是操控的地方
            new MiniCssExtractPlugin({
                filename: devMode ? 'static/css/[name].min.css' : 'static/css/[hash].min.css',
                //     chunkFilename: devMode ? 'static/js/[name]_chunk.min.css' : 'static/js/[hash]_chunk.min.css',
            }),
        )
        //production
        optimization.minimizer.push(
            //压缩js
            new TerserJSPlugin({
                parallel: true,
                sourceMap: true
            }),
            //压缩css
            new OptimizeCSSAssetsPlugin({
                assetNameRegExp: /\.optimize\.css$/g,
                cssProcessor: require('cssnano'),
                cssProcessorPluginOptions: {
                    preset: ['default', {
                        discardComments: {
                            removeAll: true
                        }
                    }],
                },
                canPrint: true
            }),
        )
    } else {
        //development cdn config
    }
    return {
        mode: devMode ? 'development' : 'production',
        devtool: devMode ? 'cheap-module-eval-source-map' : 'cheap-module-source-map',
        entry: {
            admin: path.resolve(__dirname, "src/pages/web/entry.js"),
        },
        output: {
            path: path.resolve(process.cwd(), 'dist'),
            // path: path.resolve(__dirname, 'dist'),
            filename: devMode ? 'static/js/[name].min.js' : 'static/js/[hash].min.js',
        },
        devServer: {
            hot: true,
            port: 9001,
            historyApiFallback: true
        },
        plugins,
        optimization,
        performance: {
            hints: false
        },
        externals: {
            'js-cookie': 'Cookies',
            'vue': 'Vue',
            'vue-router': 'Router',
            'axios': 'axios',
            'element-ui': 'ELEMENT',
        },
        resolve: {
            alias: {
                vue$: "vue/dist/vue.esm.js",
                '@': path.resolve('src')
            },
            extensions: [".mjs", ".js", ".vue", ".json"]
        },
        module: {
            rules: [{
                    test: /\.vue$/,
                    loader: 'vue-loader'
                },
                {
                    test: /\.scss$/,
                    use: [{
                            loader: devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                        },
                        // 'css-loader?sourceMap&modules!px2rem-loader?remUnit=75&remPrecision=8!sass-loader'
                        'css-loader?sourceMap&modules!sass-loader'
                    ],
                    exclude: [
                        path.resolve(__dirname, 'node_modules'),
                    ]
                },
                {
                    test: /\.css$/,
                    use: [{
                            loader: devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                        },
                        // 'css-loader?sourceMap&modules!px2rem-loader?remUnit=75&remPrecision=8'
                        'css-loader?sourceMap&modules'
                    ],
                    exclude: [
                        path.resolve(__dirname, 'node_modules'),
                    ]
                },
                {
                    test: /\.js$/,
                    loader: 'babel-loader',
                    options: {
                        "babelrc": false, // 不采用.babelrc的配置,懒加载必须需要添加
                        "plugins": [
                            "dynamic-import-webpack"
                        ]
                    },
                    //排除node_modules
                    exclude: file => (
                        /node_modules/.test(file) &&
                        !/\.vue\.js/.test(file)
                    )
                },
                {
                    test: /\.(png|jpe?g|gif)$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            limit: 200,
                            name(file) {
                                return devMode ? 'static/images/[name].[ext]' : 'static/images/[hash].[ext]'
                            },
                        },
                    }]
                }, {
                    test: /\.css$/,
                    use: [{
                            loader: devMode ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
                        },
                        'css-loader?sourceMap&modules'
                    ],
                    include: [
                        path.resolve(__dirname, 'node_modules'),
                    ],
                },
                {
                    test: /\.(woff|svg|eot|ttf)\??.*$/,
                    use: [{
                        loader: 'url-loader',
                        options: {
                            name(file) {
                                return devMode ? 'static/other/[name].[ext]' : 'static/other/[hash].[ext]'
                            },
                        },
                    }]
                }
                // {
                //     enforce: 'pre',
                //     test: /\.(js|vue)$/,
                //     loader: 'eslint-loader',
                //     exclude: /node_modules/
                // }
            ],
        }
    }
};