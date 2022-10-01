let LivingCreature = require('./LivingCreature');

module.exports = class Toxic extends LivingCreature {

    constructor(x, y) {
        super(x, y);

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

    mul() {
        this.energy++;
        let emptyCells = super.chooseCell(0)
        let newCell = emptyCells[Math.floor(Math.random() * emptyCells.length)]
        if (this.energy >= 100 && newCell) {
            let newToxic = new Toxic(newCell[0], newCell[1]);
            toxicArr.push(newToxic);
            matrix[newCell[1]][newCell[0]] = 1;
            this.energy = 0;
        }
    }

}