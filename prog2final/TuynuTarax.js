class TuynuTarax extends LivingCreature{
    constructor(x, y) {
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
    getNewCordinates(){
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
    chooseCell(char, char1,char2,char3){
        this.getNewCordinates();
          let result = [];
  
          for (let i = 0; i < this.directions.length; i++) {
              let x = this.directions[i][0];
              let y = this.directions[i][1];
  
              if ( y < matrix.length && y >= 0 && x < matrix[0].length && x >= 0 ){
                  if (matrix[y][x] == char || matrix[y][x] == char1 || matrix[y][x] == char2 ||matrix[y][x] == char3) {
                      result.push(this.directions[i]);
                  }
              }
  
          }
        return result;
  
        
                  
      }
  
    eat(){
        let found = this.chooseCell(5,3,2,1);
        let exact = random(found)

        if (exact){
            this.energy +=5;
            let x = exact[0];
            let y = exact[1];

            for (let i = 0; i < grassArr.length; i++) {
                if( grassArr[i].x == x && grassArr[i].y == y ){
                    grassArr.splice(i, 1)
                }
            }

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
            for (let i = 0; i < pahapan.length; i++) {
                if( pahapan[i].x == x && pahapan[i].y == y ){
                    pahapan.splice(i, 1)
                }
            }

            matrix[y][x] = 4
            matrix[this.y][this.x] = 0
            
            this.x = x;
            this.y = y

           
        }else {
            this.move()
        }
    }
    move(){
        let found = this.chooseCell(0);
        let exact = random(found)

        if (exact){
            let x = exact[0];
            let y = exact[1];

            matrix[y][x] = 4
            matrix[this.y][this.x] = 0

            this.x = x;
            this.y = y;

            this.energy--

            if(this.energy < 0){
                this.die()
            }
        }else {
            this.energy--
            
            }
        
    }






}











