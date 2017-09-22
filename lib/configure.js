const fs      = require('fs')
const path    = require('path')
const chalk   = require('chalk')

module.exports = function (key) {
  const location = path.join(__dirname, '../', '.fastsecure.json')
  fs.writeFile(
    location, 
    JSON.stringify({
      key
    }, null, 2),
    function(err) {
      if(err) {
          return console.log(err);
      }
  
      console.log(
        chalk.green(
          '.fastrcsecure.js has been created! ' + location
        )
      )
  })
}