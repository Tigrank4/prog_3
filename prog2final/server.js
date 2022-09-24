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

function rand(min) {
    return Math.random() * min;
}
grassArr = [];
grassEaterArr = []; 
grassEaterEaterArr = [];
tuynutarax = [];
pahapan = [];
 matrix = [];


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
 matrixGenerator(20, 50, 5, 5, 1, 1)


io.sockets.emit('send matrix', matrix)




function createObject(matrix) {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                matrix[y][x] = 1;
                let gr = new Grass(x, y);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2) {
                matrix[y][x] = 2;
                let great = new GrassEater(x, y);
                grassEaterArr.push(great);
            }
            else if (matrix[y][x] == 3) {
                matrix[y][x] == 3
                let greateat = new GrassEaterEater(x, y);
                grassEaterEaterArr.push(greateat);
            }
            else if (matrix[y][x] == 4) {
                if (tuynutarax.length == 0) {
                
                let tr = new TuynuTarax(x, y);
                tuynutarax.push(tr);
            }
                }
               
            else if (matrix[y][x] == 5) {
                if (pahapan.length == 0) {
                  
                let trer = new Pahapan(x, y);
                pahapan.push(trer); 
                }
                
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


io.on('connection', function () {
    createObject(matrix)
})







