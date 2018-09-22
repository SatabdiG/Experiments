let tree;
function setup() {
    noCanvas();
    tree = new Tree();
    for(let i = 0;i<10;i++){
        tree.addValue(floor(random(0,100)))
    }
    console.log(tree);
    tree.traverse();
    console.log(tree.search(5));
}

function draw() {
    ellipse(50,50, 80,80)
}

function Node(val) {
    this.val = val;
    this.left = null;
    this.right = null;
}

function Tree() {
    this.root = null;
}

Tree.prototype.addValue = function(val) {
    let n  = new Node(val);
    if(this.root === null) {
        this.root = n;
    } else {
        this.root.addNode(n);
    }
}

Tree.prototype.traverse = function() {
    this.root.visit()
}

Tree.prototype.search = function(val) {
    let found = this.root.search(val);
    return found;
}

Node.prototype.addNode = function(n) {
    if(n.val < this.val) {
        if(this.left === null) {
            this.left = n;
        } else {
            this.left.addNode(n);
        }
    } else if(n.val> this.val){
        if(this.right === null) {
            this.right = n
        } else {
            this.right.addNode(n);
        }

    }
}

Node.prototype.visit = function () {
    if(this.left != null) {
        this.left.visit();
    }
    console.log(this.val);
    if(this.right != null) {
        this.right.visit();
    }
}

Node.prototype.search = function (val) {
    if(this.val  === val){
        return this;
    }else if(val < this.val && this.left !== null) {
       return this.left.search(val)
    } else if(val > this.val && this.right !== null) {
      return  this.right.search(val)
    }
    return null;
}

