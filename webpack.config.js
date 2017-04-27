var path = require('path');

module.exports = {
    entry: './www/src/goTenna.ts',
    output: {
        path: path.resolve(__dirname, 'www/dist/'),
        filename: 'goTenna.bundle.js'
    },
    resolve: {
        extensions: ['.ts']
    },
    module: {
        rules: [
            {
                test: /\.ts$/, use: 'ts-loader',
            }
        ],
    },
}
