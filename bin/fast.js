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

const boot = (args) => {
  try {
    if (cliopts.key) {
      return configure(cliopts.key)
    }

    if (cliopts.init) {
      if (typeof global.init !== 'function') {
        console.error('Fast::boot(): Error: function init is undefined!')
        return console.error('Fast::boot(): Try reinstalling via: npm i -g .')
      }

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