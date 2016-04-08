let webpack = require('webpack');

module.exports = {
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/foundation.min.js',
        './frontend/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            '$': 'jquery',
            'jQuery': 'jquery',
        })
    ],
    output: {
        path: __dirname,
        filename: './public/bundle.js'
    },
    resolve: {
        root: __dirname,
        alias: {
            About: 'frontend/components/About.jsx',
            applicationStyles: 'frontend/css/app.css',
            ErrorModal: 'frontend/components/ErrorModal.jsx',
            Examples: 'frontend/components/Examples.jsx',
            Main: 'frontend/components/Main.jsx',
            Nav: 'frontend/components/Nav.jsx',
            openWeatherMap: 'frontend/api/openWeatherMap.jsx',
            Weather: 'frontend/components/Weather.jsx',
            WeatherForm: 'frontend/components/WeatherForm.jsx',
            WeatherMessage: 'frontend/components/WeatherMessage.jsx'
        },
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015', 'stage-0']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};