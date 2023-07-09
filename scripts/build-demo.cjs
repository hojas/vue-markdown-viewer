const path = require('node:path')
const shell = require('shelljs')

function build() {
  shell.cd(path.resolve(__dirname, '../packages/demo/'))
  shell.exec('pnpm run build')
}

build()
