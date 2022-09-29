

let LivingCreature = require('./LivingCreature')

module.exports = class Iam extends LivingCreature {
    constructor(x, y) {
        super(x, y)
        super.x = x;
        super.y = y;
        this.energy = 30;
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

    chooseCell(char,char1) {
        let found = [];
        for (let i in this.directions) {
            let x = this.directions[i][0];
            let y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

                if (matrix[y][x] == char || matrix[y][x] == char1) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    eat(){
        let found =super.chooseCell(6);
        let exact = found[Math.floor(Math.random() * found.length)]

        if (exact){
    
            let x = exact[0];
            let y = exact[1];

            for (let i = 0; i < points.length; i++) {
                if( points[i].x == x && points[i].y == y ){
                    points.splice(i, 1)
                }
            }

           

            matrix[y][x] = 7
            matrix[this.y][this.x] = 0
            
            this.x = x;
            this.y = y
        }else {
            this.move()
        }
    }
    move(){
        let found =this.chooseCell(0,1);
        let exact = found[Math.floor(Math.random() * found.length)]

        if (exact){
            let x = exact[0];
            let y = exact[1];

            matrix[y][x] = 7
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
