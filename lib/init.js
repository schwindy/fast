module.exports = function () {
  const fs      = require('fs')
  const path    = require('path')
  const chalk   = require('chalk')
  
  const rcLocation = path.join(process.cwd(), '.fastrc.json')
  
  if (fs.existsSync(rcLocation)) {
    console.log(
      chalk.yellow(
        '.fastrc already exists!'
      )
    )
  } else {
    fs.writeFile(
      rcLocation, 
      JSON.stringify({
        name: 'MyFastProject',
        dir: 'deploy',
        dest: 'fastbeta.com',
        deployKey: 'abc123youshouldreallychangeme'
      }, null, 2),
      function(err) {
        if(err) {
            return console.log(err);
        }
    
        console.log(
          chalk.green(
            '.fastrc has been created! Please update it with the correct information before using Fast!'
          )
        )
    })
  }
}