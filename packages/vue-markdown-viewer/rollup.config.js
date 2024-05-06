import { nodeResolve } from '@rollup/plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import vue from 'rollup-plugin-vue'
import packageJson from './package.json' assert { type: 'json' }

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
