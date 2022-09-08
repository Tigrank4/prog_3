var matrix = [];
var grassArr = [];
var grassEaterArr = [];
var grassEaterEaterArr = [];
var tuynutarax = [];
var pahapan = [];
var side = 20;
function setup() {
    function matrixGenerator(matrixSize, grassCount, grassEaterCount, grassEaterEaterCount,pahapanCount,tuynutaraxCount){
        for (let i = 0; i < matrixSize; i++) {
            matrix[i] = []
            for (let o = 0; o < matrixSize; o++) { 
                matrix[i][o] = 0;
            }
        }
        for (let i = 0; i < grassCount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 1;
        }
        for (let i = 0; i < grassEaterCount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 2;
        }
        for (let i = 0; i < grassEaterEaterCount; i++) {
            let x = Math.floor(random(matrixSize));
            let y = Math.floor(random(matrixSize));
            matrix[y][x] = 3;
        }
        for (let i = 0; i < tuynutaraxCount; i++) {
            let x = Math.floor(random(matrixSize));
           let y = Math.floor(random(matrixSize));
       matrix[y][x] = 4;
        }
        for (let i = 0; i < pahapanCount; i++) {
            let x = Math.floor(random(matrixSize));
           let y = Math.floor(random(matrixSize));
       matrix[y][x] = 5;
        }
    }
    matrixGenerator(20, 50, 5, 5, 1, 1)
    
    frameRate(3);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');

    for (let y = 0; y < matrix.length; y++) {
        for (let x = 0; x < matrix[y].length; x++) {
            
            if (matrix[y][x] == 1){
                let gr = new Grass(x, y);
                grassArr.push(gr);
            }
            else if (matrix[y][x] == 2){
                let eater = new GrassEater(x, y);
                grassEaterArr.push(eater);
            }
            else if (matrix[y][x] == 3){
                let eatergr = new GrassEaterEater(x, y);
                grassEaterEaterArr.push(eatergr);
            }
            else if (matrix[y][x] == 4){
                let egr = new TuynuTarax(x, y);
                tuynutarax.push(egr);
           }
            else if (matrix[y][x] == 5){
                let eggr = new Pahapan(x, y);
                pahapan.push(eggr);
            }
        }
    }
}

function draw() {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if(matrix[y][x] == 4){
                fill("orange");
            }
            else if(matrix[y][x] == 5){
                fill("blue");
            }
            rect(x * side, y * side, side, side);

        }
    }

    for (let i = 0; i < grassArr.length; i++) {
        const grass = grassArr[i];
        grass.mul();
    }
    for (let i = 0; i < grassEaterArr.length; i++) {
        const eater = grassEaterArr[i];
        eater.eat();
    }
    for (let i = 0; i < grassEaterEaterArr.length; i++) {
        const eaterr = grassEaterEaterArr[i];
        eaterr.eat();
    }
    for (let i = 0; i < pahapan.length; i++) {
        const eaterrr = pahapan[i];
        eaterrr.eat();
    }
    for (let i = 0; i < tuynutarax.length; i++) {
        const grasss = tuynutarax[i];
        grasss.eat()
   }
  }
