

let LivingCreature = require('./LivingCreature')

module.exports = class GrassEater extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        super.x = x;
        super.y = y;
        this.energy = 20;
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }

    chooseCell(char, char1){
        let result = [];

        for (let i = 0; i < this.directions.length; i++) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];

            if ( y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0 ){
                if (matrix[y][x] == char || matrix[y][x] == char1) {
                    result.push(this.directions[i]);
                }
            }

        }
      return result;



    }
    
    
    mul() {
        let found = this.chooseCell(0);
        let exact = found[Math.floor(Math.random() * found.length)]

        if (exact && this.energy > 30) {
            let x = exact[0];
            let y = exact[1];

            let eater = new GrassEater(x, y);
            matrix[y][x] = 2;
            grassEaterArr.push(eater);

            this.energy = 20;
        } else {
            console.error('there is no way to multiply');
        }
    }
    eat(){
        let found =this.chooseCell(1,6);
        let exact = found[Math.floor(Math.random() * found.length)]

        if (exact){
            this.energy +=5;
            let x = exact[0];
            let y = exact[1];

            for (let i = 0; i < grassArr.length; i++) {
                if( grassArr[i].x == x && grassArr[i].y == y ){
                    grassArr.splice(i, 1)
                }
            }

            for (let i = 0; i < toxicArr.length; i++) {
                if( toxicArr[i].x == x && toxicArr[i].y == y ){
                    toxicArr.splice(i, 1);
                  this.energy -= 10;

                }
            }

            matrix[y][x] = 2
            matrix[this.y][this.x] = 0
            
            this.x = x;
            this.y = y

            if(this.energy > 40){
                this.mul()
            }
            
        }else {
            this.move()
        }
    }
    move(){
        let found =this.chooseCell(0);
        let exact = found[Math.floor(Math.random() * found.length)]

        if (exact){
            let x = exact[0];
            let y = exact[1];

            matrix[y][x] = 2
            matrix[this.y][this.x] = 0

            this.x = x;
            this.y = y;

            this.energy--

            if(this.energy < 0){
                this.die()
            }
        }else {
            this.energy--
            if(this.energy < 0){
                this.die()
            }
        }
    }
    die(){
        for (let i = 0; i < grassEaterArr.length; i++) {
            if( grassEaterArr[i].x == this.x && grassEaterArr[i].y == this.y ){
                grassEaterArr.splice(i, 1)
            }

        

        }
       

        matrix[this.y][this.x] = 0
    }
  
}
