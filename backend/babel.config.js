module.exports = {
    presets: [
    [
            '@babel/preset-env',
            {
                targets: {
                    node: 'current',
                },
            },
        ],
        '@babel/preset-typescript',
    ],
    puglins: [
        ['module-resolver', {
            alias: {
                '@config': './src/config',
                '@schemas': './src/schemas',
                '@routes': './src/routes',
                '@middlewares': './src/middlewares',
            },
        }],
    ],
    ignore: [
        '**/*.spec.ts',
    ],
};