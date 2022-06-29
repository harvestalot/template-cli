#!/user/bin/evn node
require=require('esm')(module)
require('../src/index.js').cli(process.argv)