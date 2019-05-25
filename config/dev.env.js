'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const chalk = require('chalk')

const argv = JSON.parse(process.env.npm_config_argv).original
let HOST_ENV = argv[2] ? argv[2].replace(/[^a-z]+/ig,"") : ''
console.log(chalk.green('当前环境常量：'))
console.log(argv)
console.log(HOST_ENV)
let buildEnv = '';
switch (HOST_ENV) {
  case 'test':
      buildEnv = '"test"';
      break
  case 'prod':
      buildEnv = '"prod"';
      break
  case 'release':
      buildEnv = '"release"'
      break
}

module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  buildEnv: buildEnv
})
