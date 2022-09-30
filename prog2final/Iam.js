

// let LivingCreature = require('./LivingCreature')

// module.exports = class Iam extends LivingCreature {
//     constructor(x, y) {
//         super(x, y)
//         super.x = x;
//         super.y = y;
//         this.energy = 30;
//         this.directions = [
//             [this.x - 1, this.y - 1],
//             [this.x, this.y - 1],
//             [this.x + 1, this.y - 1],
//             [this.x - 1, this.y],
//             [this.x + 1, this.y],
//             [this.x - 1, this.y + 1],
//             [this.x, this.y + 1],
//             [this.x + 1, this.y + 1]
//         ];
//     }

//     chooseCell(char,char1) {
//         let found = [];
//         for (let i in this.directions) {
//             let x = this.directions[i][0];
//             let y = this.directions[i][1];
//             if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {

//                 if (matrix[y][x] == char || matrix[y][x] == char1) {
//                     found.push(this.directions[i]);
//                 }
//             }
//         }
//         return found;
//     }
//     eat(){
//         let found =this.chooseCell(2,3);
//         let exact = found[Math.floor(Math.random() * found.length)]

//         if (exact){
    
//             let x = exact[0];
//             let y = exact[1];

//             for (let i = 0; i < grassEaterArr.length; i++) {
//                 if( grassEaterArr[i].x == x && grassEaterArr[i].y == y ){
//                     grassEaterArr.splice(i, 1)
//                 }
//             }
//             for (let i = 0; i < grassEaterEaterArr.length; i++) {
//                 if( grassEaterEaterArr[i].x == x && grassEaterEaterArr[i].y == y ){
//                     grassEaterEaterArr.splice(i, 1)
//                 }
//             }
           

//             matrix[y][x] = 6;
//             matrix[this.y][this.x] = 0
            
//             this.x = x;
//             this.y = y
//         }else {
//             this.move()
//         }
//     }
//     move(){
//         let found =this.chooseCell(0);
//         let exact = found[Math.floor(Math.random() * found.length)]

//         if (exact){
//             let x = exact[0];
//             let y = exact[1];

//             matrix[y][x] = 6;
//             matrix[this.y][this.x] = 0

//             this.x = x;
//             this.y = y;

//             this.energy--

//             if(this.energy < 0){
//                 this.die()
//             }
//         }else {
//             this.energy--
//             if(this.energy < 0){
//                 this.die()
//             }
//         }
//     }
//     die(){
//         for (let i = 0; i < iam.length; i++) {
//             if( iam[i].x == this.x && iam[i].y == this.y ){
//                 iam.splice(i, 1)
//             }

        

//         }
       

//         matrix[this.y][this.x] = 0
//     }
  
// }


let LivingCreature = require('./LivingCreature')

module.exports = class Iam extends LivingCreature {
    constructor(x, y) {
        super(x, y);
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
   
    eat(){
        let found =this.chooseCell(1,2);
        let exact = found[Math.floor(Math.random() * found.length)]

        if (exact){
            this.energy +=5;
            let x = exact[0];
            let y = exact[1];

            for (let i = 0; i < grassEaterEaterArr.length; i++) {
                if( grassArr[i].x == x && grassArr[i].y == y ){
                    grassEaterEaterArr.splice(i, 1)
                }
            }
            for (let i = 0; i < grassEaterArr.length; i++) {
                if( grassEaterArr[i].x == x && grassEaterArr[i].y == y ){
                    grassEaterArr.splice(i, 1)
                }
            }
           

            matrix[y][x] = 6;
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

            matrix[y][x] = 6
            matrix[this.y][this.x] = 0

            this.x = x;
            this.y = y;

           
        }
    }
   
}