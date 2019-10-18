const box = 40;
const height = 680;
const width = 400;
var gameOn = true;

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
            this.coordinates[element[0]][element[1]] = 1;
        });
    }

    this.drawGrid = () => {
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
    this.matrixIsFull = () => {
        for(let j = 0; j<this.coordinates[0].length; j++){
            let counter = 0;
            for(let i = 0; i<this.coordinates.length; i++){
                if(this.coordinates[i][j] == 1){
                    counter++;
                }
                if(counter>16){
                    return true;
                }
            }
        }
        return false;
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
            //console.log(arrayY, arrayX);
            //console.log(array_of_arrays[arrayY][arrayX]);
            if (arrayY> 15 || array_of_arrays[arrayY][arrayX] == 1) {
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
            this.coord.forEach(crd => {
                ctx.fillRect(crd[1] * box, crd[0] * box, box, box);
            });
        }
    }

    this.eraseTile = () => {
        var canvas = document.getElementById('tetris');
        if (canvas.getContext) {
            var ctx = canvas.getContext('2d');
            this.coord.forEach(crd => {
                ctx.clearRect(crd[1] * box, crd[0] * box, box, box);
            });
        }
    }
}


//Game itself
var ruudukko = new matrix();
ruudukko.makeMatrix();
ruudukko.drawGrid();
var counter = 1;
var tiili = new tile();
while(gameOn) {
    tiili.drawTile();
    if(tiili.collision(ruudukko.coordinates)) {
        ruudukko.insertTileToCoordinates(tiili.getCoordinates());
        tiili = new tile();
    } else {
        tiili.eraseTile();
        tiili.gravity();
        ruudukko.drawGrid();
    }
    
    console.log(ruudukko.matrixIsFull());
    if(ruudukko.matrixIsFull()) {
        gameOn = false;
    }
    console.log(counter);
    counter++;
}

        
 





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