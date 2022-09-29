
var socket = io();



var side = 20;
function setup() {
   

    frameRate(3);
    createCanvas(20 * side, 20 * side);
    background('#acacac');
}

socket.on("weather", function (data) {
    weath = data;
})

function nkarel(matrix) {

    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

             if (matrix[y][x] == 1){
                if(weath == "summer") {
              fill("#82FF00");
            }else if (weath == "autumn") {
                fill("#FF800A");
            }else if (weath == "winter") {
                fill("white");
            }else if (weath == "spring") {
                fill("green");
            }
        }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                if(weath == "summer") {
                    fill("#82FF00");
                  }else if (weath == "autumn") {
                      fill("#FFE95A");
                  }else if (weath == "winter") {
                      fill("#B9FFF6");
                  }else if (weath == "spring") {
                      fill("#FFFF82");
                  }
            }
            else if (matrix[y][x] == 3) {
                if(weath == "summer") {
                    fill("#BF0053");
                  }else if (weath == "autumn") {
                      fill("red");
                  }else if (weath == "winter") {
                      fill("#BF7089");
                  }else if (weath == "spring") {
                      fill("#BF9299");
                  }
                
            }
            else if (matrix[y][x] == 4) {
                if(weath == "summer") {
                    fill("orange");
                  }else if (weath == "autumn") {
                      fill("#124966");
                  }else if (weath == "winter") {
                      fill("#E348E3");
                  }else if (weath == "spring") {
                      fill("#720EFC");
                  }
            }
            else if (matrix[y][x] == 5) {
                if(weath == "summer") {
                    fill("#003A6C");
                  }else if (weath == "autumn") {
                      fill("#63FFFF");
                  }else if (weath == "winter") {
                      fill("blue");
                  }else if (weath == "spring") {
                      fill("cyan");
                  }
            }
            rect(x * side, y * side, side, side);

        }
    }

}
setInterval(
    function () {
    socket.on('send matrix', nkarel)
    },1000
)

