import path from 'path'
import { execa } from 'execa'
import fs from 'fs-extra'
import { fileURLToPath } from 'url'
import minimist from 'minimist'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const distDir = path.resolve(__dirname, '../dist')
const argv = minimist(process.argv.slice(2));

// use pnpm build -v 1.0.0-alpha.x
run(argv)

async function run(argv) {
  const { v: version = '0.0.1-alpha.1' } = argv
  const packageJson = {
    name: 'carob',
    version,
    license: 'MIT',
    main: 'index.js',
    module: 'index.es.js',
    types: 'index.d.js',
    description: 'A javascript DOM library',
    keywords: ['javascript', 'DOM', 'function', 'methods'],
    homepage: 'https://github.com/uphg/carob#readme',
    repository: 'uphg/carob',
    bugs: 'uphg/carob/issues',
    author: 'Lv Heng <lvheng233@gmail.com>'
  }

  await execa('tsc').pipeStdout(process.stdout)
  if (fs.existsSync(distDir)) {
    await fs.remove(distDir)
  }
  await execa('rollup', ['-c', '--environment', 'ESM']).pipeStdout(process.stdout)
  await execa('rollup', ['-c']).pipeStdout(process.stdout)
  await execa('eslint', ['dist', '--fix']).pipeStdout(process.stdout).catch(() => console.log('ESLint error!'))
  const strPackage = JSON.stringify(packageJson, null, 2)

  fs.writeFile(path.resolve(distDir, './package.json'), strPackage)
  await execa('cp', ['README.md', 'dist']).pipeStdout(process.stdout)
  console.log(`\ncarob v${version} build successful!`)
}
