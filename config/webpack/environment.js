const { environment } = require('@rails/webpacker')
const webpack = require('webpack')

// adiciona os pluguins:
environment.plugins.prepend(
    'Provide',
    new webpack.ProvidePlugin({
        $: 'jquery',
        jQuery: 'jquery',
        jquery: 'jquery',
        Popper: ['popper.js', 'default'],
    })
)

module.exports = environment
