#!/usr/bin/env node
const commandLineArgs = require('command-line-args')
const {
  lib,
  fast
} = require('../lib')

const optionDefinitions = [
  { name: 'init', alias: 'i', type: Boolean }
]

const cliopts = commandLineArgs(optionDefinitions)

if (cliopts.init) {
  init()
} else {
  fast()
}
