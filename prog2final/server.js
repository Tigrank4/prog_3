var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");


app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
const PORT = 3000;
server.listen(PORT, () => {
    console.log('connected');
});

//Math.floor(Math.random() * matrixSize)
//


grassArr = [];
grassEaterArr = []; 
grassEaterEaterArr = [];
tuynutarax = [];
pahapan = [];
 matrix = [];

weath = "winter";
Grass = require("./Grass")
GrassEater = require("./GrassEater")
GrassEaterEater = require("./GrassEaterEater")
TuynuTarax = require("./TuynuTarax")
 Pahapan = require("./Pahapan")

function matrixGenerator(matrixSize, grassCount, grassEaterCount, grassEaterEaterCount, pahapanCount, tuynutaraxCount) {
    

    for (let i = 0; i < matrixSize; i++) {
        matrix[i] = []
        for (let o = 0; o < matrixSize; o++) {
            matrix[i][o] = 0;
        }
    }
    for (let i = 0; i < grassCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);
        matrix[y][x] = 1;
    }
    for (let i = 0; i < grassEaterCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);
        matrix[y][x] = 2;
    }
    for (let i = 0; i < grassEaterEaterCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);
        matrix[y][x] = 3;
    }
    for (let i = 0; i < tuynutaraxCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);
        matrix[y][x] = 4;
    }
    for (let i = 0; i < pahapanCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);
        matrix[y][x] = 5;
    }
}
 matrixGenerator(20, 50, 15, 15, 1, 1)


io.sockets.emit('send matrix', matrix)




function createObject(matrix) {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                matrix[y][x] = 1;
                grassArr.push(new Grass(x, y));
            }
            else if (matrix[y][x] == 2) {
                matrix[y][x] = 2;
              
                grassEaterArr.push(new GrassEater(x, y));
            }
            else if (matrix[y][x] == 3) {
                matrix[y][x] == 3
                
                grassEaterEaterArr.push(new GrassEaterEater(x, y));
            }

        
            else if (matrix[y][x] == 4) {

                tuynutarax.push(new TuynuTarax(x, y));
                }
          
             else if (matrix[y][x] == 5) {  
                pahapan.push(new Pahapan(x, y)); 
            }
        }
    }
 
    io.sockets.emit('send matrix', matrix)


}


function game(){
    
    for (let i in grassArr) {
      
        grassArr[i].mul();
        
       
    }
    for (let i in grassEaterArr) 
        grassEaterArr[i].eat();
    
    for (let i in grassEaterEaterArr) 
        grassEaterEaterArr[i].eat();
    
    for (let i in tuynutarax) {
        tuynutarax[i].eat();
       
    }
    for (let i in pahapan) {
       
        pahapan[i].eat();
        
    }
    io.sockets.emit("send matrix", matrix);
}

setInterval(game, 1000)

function weather() {
    if (weath == "winter") {
        weath = "spring"
    }
    else if (weath == "spring") {
        weath = "summer"
    }
    else if (weath == "summer") {
        weath = "autumn"
    }
    else if (weath == "autumn") {
        weath = "winter"
    }
    io.sockets.emit('weather', weath)
}
setInterval(weather, 5000);


io.on('connection', function () {
    createObject(matrix)
})


var statistics = {};

setInterval(function() {
    statistics.grass = grassArr.length;
    statistics.grassEater = grassEaterArr.length;
    statistics.grassEaterEater = grassEaterEaterArr.length;
    io.sockets.emit("send matrix", statistics);
    fs.writeFile("statistics.json", JSON.stringify(statistics), function(){
        console.log("send")
    })
},300)






