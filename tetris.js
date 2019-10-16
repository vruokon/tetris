const box = 40;
const height = 680;
const width = 400;

function matrix() {
    this.coordinates = [];

    this.makeMatrix = () => {
        for (let y = 0; y < height / box; y++) {
            var array = []
            for (let x = 0; x < width / box; x++) {
                array.push(0);
            }
            this.coordinates.push(array);
        }
    }

    this.insertTileToCoordinates = (tile) => {
        tile.forEach(element => {
            this.coordinates[element[0]][element[1]] =1;
        });
    }
}

function tile() {
    this.coord = [
        [0, 6],
        [1, 6],
        [2, 6],
        [3, 6]
    ];

    this.gravity = () => {
        this.coord.forEach(coordinate => {
            coordinate[0]++;
        });
    }

    this.getCoordinates = () => {
        return this.coord;
    }

    this.collision = (array_of_arrays) => {
        for (let i = 0; i < this.coord.length; i++) {
            let arrayY = this.coord[i][0];
            let arrayX = this.coord[i][1];
            console.log(arrayY, arrayX);
            console.log(array_of_arrays[arrayY][arrayX]);
            if (array_of_arrays[arrayY][arrayX] == 1) {
                console.log('true')
                return true;
            }
        }
        return false;
    }

    this.drawTile = () => {
        var canvas = document.getElementById('tetris');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            this.coord.forEach(crd  => {
                ctx.fillRect(crd[1]*box, crd[0]*box, box, box); 
            });
        }
    }
}

let tiili = new tile();
let m = new matrix();
console.log(tiili.getCoordinates());


/* setInterval(() => {
    if(tile){
        y = moveTile(y);
    }
}, 1000); */



function draw(x, y) {
    var canvas = document.getElementById('tetris');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.fillRect(x, y, box, box);
    }
}

function drawGrid() {
    let canvas = document.getElementById('tetris');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        for (let y = 0; y < height; y += box) {
            for (let x = 0; x < width; x += box) {
                ctx.strokeRect(x, y, box, box);
            }
        }
    }
}
