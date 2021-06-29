const fs = require('fs')
const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
    /*fs.readFile('test.txt', 'UTF-8', (err, data) => {
        if (err) return console.log(err)
        res.end(data)
    })*/

    const rsstream = fs.createReadStream('test.txt')
    rsstream.pipe(res)
    /*rsstream.on('data', (chunkdata) => {
        res.write(chunkdata)
    });

    rsstream.on('end', () => {
        res.end()
    });

    rsstream.on('error', (err) => {
        console.log(err)
        res.end('File not found')
    })*/

})

server.listen(4001, "127.0.0.1");