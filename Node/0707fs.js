var fs = require('fs')
var fd = fs.openSync('hello.txt', 'w') // 打开
fs.writeSync(fd, '今天天气不错')