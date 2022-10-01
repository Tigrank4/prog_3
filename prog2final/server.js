var express = require('express');
var app = express();
var server = require('http').Server(app);
var io = require('socket.io')(server);
var fs = require("fs");
 


app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});

app.get('/start', function (req, res) {
    res.redirect('start.html');
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
iamArr = [];
kills = [];
 matrix = [];



weath = "winter";
Grass = require("./Grass")
GrassEater = require("./GrassEater")
GrassEaterEater = require("./GrassEaterEater")
TuynuTarax = require("./TuynuTarax")
 Pahapan = require("./Pahapan")
 Iam = require('./Iam');


function matrixGenerator(matrixSize, grassCount, grassEaterCount, grassEaterEaterCount, pahapanCount, tuynutaraxCount,iamCount) {
    

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
    for (let i = 0; i < iamCount; i++) {
        let x = Math.floor(Math.random() * matrixSize);
        let y = Math.floor(Math.random() * matrixSize);
        matrix[y][x] = 6;
    }
}
 matrixGenerator(30,20,15,15,1,1,1);


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
            else if (matrix[y][x] == 6) {  
                iamArr.push(new Iam(x, y)); 
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
    
    for(let i in iamArr){
        iamArr[i].eat();
    }
    
    io.sockets.emit("send matrix", matrix);
}

setInterval(game, 1000)

function kill() {
    grassArr = [];
    grassEaterArr = [];
    grassEaterEaterArr = [];
    pahapan = [];
    tuynutarax = [];
    iamArr = []

    
   

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
          
                
                 matrix[y][x] = 0;
                
            
        }
    }
    io.sockets.emit("send matrix", matrix);
}


function addGrass() {
    for (var i = 0; i < 10; i++) {
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 1
            var gr = new Grass(x, y)
            grassArr.push(gr)
        }
    }
    io.sockets.emit("send matrix", matrix);
}
function addGrassEater() {
    for (var i = 0; i < 5; i++) {   
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 2
            grassEaterArr.push(new GrassEater(x, y))
        }
    }
    io.sockets.emit("send matrix", matrix);
}

function addGrassEaterEater() {
    for (var i = 0; i < 3; i++) {   
    var x = Math.floor(Math.random() * matrix[0].length)
    var y = Math.floor(Math.random() * matrix.length)
        if (matrix[y][x] == 0) {
            matrix[y][x] = 3
            grassEaterEaterArr.push(new GrassEaterEater(x,y))
        }
    }
    io.sockets.emit("send matrix", matrix);
}

function DeletePahapan() {
    pahapan = []

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if(matrix[y][x] == 5){
            matrix[y][x] = 0;
            }
        }
    }

    io.sockets.emit("send matrix", matrix);
}

function DeleteTuynuTarax() {
    tuynutarax = []

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if(matrix[y][x] == 4){
            matrix[y][x] = 0;
            }
        }
    }

    io.sockets.emit("send matrix", matrix);
}

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

io.sockets.emit("sending kills",kills);

io.on('connection', function (socket) {
    createObject(matrix);
    socket.on("kill", kill);
    socket.on("add grass", addGrass);
    socket.on("add grassEater", addGrassEater);
    socket.on("add grassEaterEater", addGrassEaterEater);
    socket.on("delete 5", DeletePahapan);
    socket.on("delete 4", DeleteTuynuTarax)


})


var statistics = {};

setInterval(function() {
    statistics.grass = grassArr.length;
    statistics.grassEater = grassEaterArr.length;
    statistics.grassEaterEater = grassEaterEaterArr.length;
    io.sockets.emit("send matrix", statistics);
    fs.writeFile("statistics.json", JSON.stringify(statistics), function(){
        console.log("send");
        io.sockets.emit("sending statistics", statistics)

    })
},300)









