#!/usr/bin/env node
const commandLineArgs = require('command-line-args')
const {
  lib,
  fast
} = require('../lib')

const optionDefinitions = [
  {name: 'init', alias: 'i', type: Boolean}
]

const cliopts = commandLineArgs(optionDefinitions)

const boot = (args) => {
  try {
    if (cliopts.init) {
      if (typeof init !== 'function') {
        console.error('Fast::boot(): Error: function init is undefined!')
        return console.error('Fast::boot(): Try reinstalling via: npm i -g .')
      }

      return init(args)
    }

    return fast(args)
  } catch (e) {
    return console.error('Fast::boot(): Error: A fatal exception occurred!', e)
  }
}

boot()