let LivingCreature = require('./LivingCreature')

module.exports = class Pahapan extends LivingCreature{
    constructor(x, y) {
       super(x, y);
        this.energy = 20;
    }
   
    chooseCell(char,char1){
        super.getNewDirections();
        return super.chooseCell(char,char1);    
      }
  
    eat(){
        let found =this.chooseCell(3,2);
        let exact = found[Math.floor(Math.random() * found.length)]

        if (exact){
            this.energy +=5;
            let x = exact[0];
            let y = exact[1];

            for (let i = 0; i < grassEaterEaterArr.length; i++) {
                if( grassEaterEaterArr[i].x == x && grassEaterEaterArr[i].y == y ){
                    grassEaterEaterArr.splice(i, 1)
                }
            }
            for (let i = 0; i < grassEaterArr.length; i++) {
                if( grassEaterArr[i].x == x && grassEaterArr[i].y == y ){
                    grassEaterArr.splice(i, 1)
                }
            }

            matrix[y][x] = 5
            matrix[this.y][this.x] = 0
            
            this.x = x;
            this.y = y

           
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

            matrix[y][x] = 5
            matrix[this.y][this.x] = 0

            this.x = x;
            this.y = y;

            this.energy -= 3;


            if(this.energy <= 0){
                this.die()
            }
        }else {
            this.energy -= 3;
            
            }
        
    }
    die(){
        for (let i = 0; i < pahapan.length; i++) {
            if( pahapan[i].x == this.x && pahapan[i].y == this.y ){
                pahapan.splice(i, 1)
            }
        }
        matrix[this.y][this.x] = 0
    }
    
}