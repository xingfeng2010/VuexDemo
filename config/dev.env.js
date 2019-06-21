'use strict'
const merge = require('webpack-merge')
const prodEnv = require('./prod.env')
const chalk = require('chalk')
const ENVIRONMENT_OBJECT = [
    {
        DEBUG: {},
        NAME: "开发环境:tspdemo",
        ENVIRONMENT_OBJECT_BASEURL: "http://tspdemo.changan.com.cn",
    },
    {
        DEBUG_NO_NET_DEBUG: {},
        NAME: "预生产环境:iovpreapi",
        ENVIRONMENT_OBJECT_BASEURL: "http://iovpreapi.changan.com.cn",
    },
    {
        TSP_TEST: {},
        NAME: "测试环境:tsptest",
        ENVIRONMENT_OBJECT_BASEURL: "http://tsptest.changan.com.cn",
    },
    {
        TSP_Tencent: {},
        NAME: "腾讯云环境:cloud.incallapi",
        ENVIRONMENT_OBJECT_BASEURL: "https://cloud.incallapi.changan.com.cn",
    },
    {
        RELEASE: {},
        NAME: "正式环境:incallapi",
        ENVIRONMENT_OBJECT_BASEURL: "https://incallapi.changan.com.cn",
    },
]

const argv = JSON.parse(process.env.npm_config_argv).original
let HOST_ENV = argv[2] ? argv[2].replace(/[^a-z]+/ig, "") : ''
console.log(chalk.green('当前环境常量：'))
console.log(argv)
console.log(HOST_ENV)
let buildEnv = '';

switch (HOST_ENV) {
    case 'DEBUG':
        buildEnv = '"DEBUG"';
        break
    case 'DEBUG_NO_NET_DEBUG':
        buildEnv = '"DEBUG_NO_NET_DEBUG"';
        break
    case 'RELEASE':
        buildEnv = '"RELEASE"'
        break
}

module.exports = merge(prodEnv, {
    NODE_ENV: '"development"',
    buildEnv: buildEnv
})
