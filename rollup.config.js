import nodeResolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import babel from '@rollup/plugin-babel'

export default {
    input: 'src/main.js',
    output: {
        file: './dist/js/main.js',
        format: 'iife'
    },
    plugins: [nodeResolve(), commonjs(), babel({ 
        babelHelpers: 'bundled'
    })]
}