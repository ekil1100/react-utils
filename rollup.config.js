import commonjs from '@rollup/plugin-commonjs'
import resolve from '@rollup/plugin-node-resolve'
import esbuild from 'rollup-plugin-esbuild'

const plugins = [resolve(), commonjs(), esbuild({ target: 'es6' })]
const external = ['react', 'react-dom']

const out = {
  input: 'src/index.ts',
  output: [
    {
      file: 'lib/index.js',
      format: 'es',
    },
    {
      file: 'lib/index.cjs',
      format: 'cjs',
    },
  ],
  external,
  plugins,
}

export default [out]
