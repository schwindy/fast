const fs      = require('fs')
const path    = require('path')
const chalk   = require('chalk')
const archiver = require('archiver')

module.exports = function (conf) {
  return new Promise(resolve => {
    const output = fs.createWriteStream(path.join(process.cwd(), 'fast.zip'))
    const archive = archiver('zip', {
        zlib: { level: 9 }
    })
    output.on('close', function() {
      console.log(
        chalk.blue(
          'Files have all been zipped, preparing to move to remote daemon...'
        )
      )
      resolve()
    })

    archive.on('error', function(err) {
      throw err
    })
    archive.pipe(output)
    archive.directory(path.join(process.cwd(), conf.dir), false)
    archive.finalize()
  })
}