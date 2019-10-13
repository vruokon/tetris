const box = 20;
const height = 700;
const width = 500;
var tile = false;
var y = 0;
var matrix = makeMatrix();
drawGrid();

setInterval(() => {
    if(tile){
        y = moveTile(y);
    }
}, 1000);

function sendTile(){
    y = 0;
    let x = Math.floor(Math.random()*25);
    console.log(x);
    matrix[0][x] = 1;
    draw((x*box),0);
    tile = true;
}

function moveTile(y){
    let yUnder = y+1;
    if(y == matrix.length){
        tile = false;
        return;
    }

    for(let x = 0; x<matrix[0].length; x++){
        if(matrix[y][x] == 1){
            if(matrix[yUnder][x] == 1){
                tile = false;
                return;
            } if(matrix[yUnder][x] == 0) {
                    matrix[yUnder][x] = 1;
                    matrix[y][x] = 0;
                    draw(x*box, yUnder*box);
                    erase(x*box, y*box);
                    drawGrid();
                    return yUnder;
            }
        }
    }
}

function erase(x, y) {
    var canvas = document.getElementById('tetris');
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');
        ctx.clearRect(x, y, box, box);
    }
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
function makeMatrix() {
    var matrix = [];
    for (let y = 0; y < height / box; y++) {
        var array = []
        for (let x = 0; x < width / box; x++) {
            array.push(0);
        }
        matrix.push(array);
    }
    return matrix;
}