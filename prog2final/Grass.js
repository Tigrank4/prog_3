

class Grass extends LivingCreature {

    mul() {
        super.energy++;
        let found = super.chooseCell(0);
        let exact = random(found)

        if (exact && super.energy > 8) {
            let x = exact[0];
            let y = exact[1];

            let grass = new Grass(x, y);
            matrix[y][x] = 1;
            grassArr.push(grass);

            super.energy = 0;
        } else {
            console.error('there is no way to multiply');
        }
    }
}