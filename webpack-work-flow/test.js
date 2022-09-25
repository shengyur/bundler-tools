const path = require('path')

const dirPath = process.cwd()
const entryPath = '../src/entry1.js'

const rst = path.join(dirPath,entryPath)

// console.log(rst)

// console.log(path.join('/foo', 'bar', 'baz/asdf', 'quux', '..'))


console.log(require.resolve('tapable'))