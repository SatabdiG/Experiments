let rows, cols;
let w = 10;
let grid = [];
let current;
let stack = [];

function setup() {
    createCanvas(400, 400);
    frameRate(5);
    cols = floor(width/w);
    rows = floor(height/w);
    for(let j =0; j<rows; j++){
        for(let i=0; i<cols; i++) {
            let cell = new Cell(i,j);
            grid.push(cell);
        }
    }
    current = grid[0];
}

function draw() {
    background(51);

    for(let i = 0; i<grid.length; i++ ) {
        grid[i].show_cell();
    }
    current.visited = true;
    current.highlight();
    let next = current.check_neighbors();
    if(next) {
        //step 1
        next.visited = true;
        stack.push(current);
        //step 3
        removeWalls(current, next);

        //next 4
        current = next;
    }else  if(stack.length>0){
        current = stack.pop();
        
    }
}

function index(i, j) {
    if(i<0 || j<0 || i>cols-1 || j>rows-1) {
        return -1;
    }
    return i + j * cols;
}


function Cell(i,j) {
    this.i =i;
    this.j =j;
    this.walls=[true, true, true, true];
    this.visited = false

    this.show_cell = function() {
        let x = this.i * w;
        let y = this.j * w;
        stroke(255);
        //top
        if(this.walls[0]) {
            line(x, y, x + w, y)
        }
        //right
        if(this.walls[1]) {
            line(x + w, y, x + w, y + w)
        }
        //bottom
        if(this.walls[2]) {
            line(x + w, y + w, x, y + w)
        }
        //left
        if(this.walls[3]) {
            line(x, y + w, x, y)
        }
        if(this.visited){
            noStroke();
            fill(255, 0, 255, 100);
            rect(x,y,w,w);
        }
        // noFill();
        // rect(x,y,w,w);
    }

    this.check_neighbors = function() {
        let neighbours = [];
        let top = grid[index(i, j-1)];
        let right = grid[index(i+1, j)];
        let bottom = grid[index(i, j+1)];
        let left = grid[index(i-1,j)];

        if(top && !top.visited) {
            neighbours.push(top);
        }
        if(right && !right.visited) {
            neighbours.push(right);
        }
         if(bottom && !bottom.visited) {
            neighbours.push(bottom);
        }
        if(left && !left.visited) {
            neighbours.push(left);
        }
        console.log(neighbours);
        if(neighbours.length > 0){
            let r = floor(random(0, neighbours.length));
           return neighbours[r];
        } else {
            return undefined;
        }

    }
    this.highlight = function() {
            let x = this.i * w;
            let y = this.j * w;
            noStroke();
            fill(0, 0, 255, 100);
            rect(x,y,w,w);
    }


}

function removeWalls(a, b) {
    let x = a.i - b.i;
    if(x === 1){
        a.walls[3] = false;
        b.walls[1] = false;
    } else if (x === -1) {
        a.walls[1] = false;
        b.walls[3] = false;
    }

    let y = a.j - b.j;
     if(y === 1){
        a.walls[0] = false;
        b.walls[2] = false;
    } else if (x === -1) {
        a.walls[2] = false;
        b.walls[0] = false;
    }

}