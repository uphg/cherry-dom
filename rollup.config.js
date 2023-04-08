import path from 'path'
import typescript from 'rollup-plugin-typescript2';

import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const entryFile = path.resolve(__dirname, './src/index.ts')
const outputConfigs = {
  umd: {
    name: 'carob',
    file: 'dist/index.umd.js',
    format: 'umd'
  },
  esm: {
    file: 'dist/index.js',
    format: 'es'
  }
}

function createConfig(env) {
  const { ESM = false } = env || {}

  const format = ESM ? 'esm' : 'umd'

  return {
    input: path.resolve(__dirname, entryFile),
    output: outputConfigs[format],
    plugins: ESM ? [
      typescript({
        check: process.env.NODE_ENV === 'production',
        tsconfig: path.resolve(__dirname, 'tsconfig.json'),
        tsconfigOverride: {
          compilerOptions: {
            sourceMap: false,
            declaration: true,
            declarationMap: false,
            rootDir: './src',
            outDir: 'dist',
            declarationDir: 'dist'
          }
        }
      })
    ] : [
      typescript({
        check: process.env.NODE_ENV === 'production',
        tsconfig: path.resolve(__dirname, 'tsconfig.json'),
        tsconfigOverride: {
          compilerOptions: {
            rootDir: './src',
            outDir: 'dist'
          }
        }
      })
    ]
  }
}

export default  createConfig(process.env)
