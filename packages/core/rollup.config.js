import { createRequire } from 'node:module'
import commonjs from '@rollup/plugin-commonjs'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import typescript from 'rollup-plugin-typescript2'
import vue from 'rollup-plugin-vue'

const require = createRequire(import.meta.url)

const packageJson = require('./package.json')

export default {
  input: 'src/index.ts',
  output: [{
    file: packageJson.module,
    format: 'es',
  }, {
    file: packageJson.main,
    format: 'cjs',
  }],
  external: ['vue'],
  plugins: [
    nodeResolve(),
    commonjs(),
    typescript({
      check: false,
      tsconfig: 'tsconfig.json',
    }),
    vue(),
  ],
}
