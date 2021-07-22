const fs = require('fs')
const objData = {
    name: "Vinod",
    age: 25,
    chennel: "Paint Life"
}

const jsonData = JSON.stringify(objData)
fs.writeFile("json1.json", jsonData,(err) => {
    console.log("File Created")
})

fs.readFile("json1.json","UTF-8", (err, data) => {
    console.log(data)
})
