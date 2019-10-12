const box = 20;
const height = 700;
const width = 500;

var matrix = makeMatrix();
drawGrid();

setInterval(() => {
    goThroughMatrix();
}, 1000);


function goThroughMatrix(){
    for(let y = 0; y<matrix.length; y++){
        for(let x = 0; x<matrix[y].length; x++){
            if(matrix[y][x] === 1) {
                draw(x*box, y*box);
            }
        }
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