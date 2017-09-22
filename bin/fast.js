#!/usr/bin/env node
const commandLineArgs = require('command-line-args')
const {
  lib,
  fast,
  configure
} = require('../lib')

const optionDefinitions = [
  { name: 'init', alias: 'i', type: Boolean },
  { name: 'key', alias: 'k', type: String }
]

const cliopts = commandLineArgs(optionDefinitions)

if (cliopts.init) {
  init()
} else if (cliopts.key) {
  configure(cliopts.key)
} else {
  fast()
}
