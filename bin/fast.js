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

const parseCliOptions = () => {
  const cliopts = commandLineArgs(optionDefinitions)

  if (typeof cliopts !== 'object') {
    console.error(`Fast::parseCliOptions(): Error: Invalid cliopts, expected object, got ${typeof cliopts}`, cliopts)
    return {}
  }

  return cliopts
}

const cliopts = parseCliOptions()

const boot = (args) => {
  try {
    if (cliopts.key) {
      return configure(cliopts.key)
    }

    if (cliopts.init) {
      return invoke('init', args)
    }

    return invoke('fast', args)
  } catch (e) {
    return console.error('Fast::boot(): Error: A fatal exception occurred!', e)
  }
}

const invoke = (method, args) => {
  try {
    if (global[method] !== 'function') {
      console.error(`Fast::invoke(${method}): Error: function ${method} is undefined!`)
      return console.error('Fast::invoke(): Try reinstalling via: npm i -g .')
    }

    return global[method](args || false)
  } catch (e) {
    return console.error('Fast::invoke(): Error: A fatal exception occurred!', e)
  }
}

boot()

