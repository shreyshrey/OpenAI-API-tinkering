const { clear } = require('console')
const readline = require('readline')
const {generateMeta, generateImage} = require('./controllers/openaiControler')

// interface for reading input from the console
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


// ask user question in the terminal
// rl.question('Yourtube Video title: \n' , generateMeta)
rl.question('Describe your Youtube thumbnail: \n' , generateImage)