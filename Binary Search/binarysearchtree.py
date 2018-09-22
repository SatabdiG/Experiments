from random import  randint

class Node(object):
    def __init__(self, val):
        self.val = val
        self.right = None
        self.left = None

    def add_node(self, node):
        if node.val < self.val:
            if self.left != None:
                self.left.add_node(node)
            else:
                self.left = node
        elif node.val > self.val:
            if self.right != None:
                self.right.add_node(node)
            else:
                self.right = node

    def traverse(self):
        if self.left  != None:
            self.left.traverse()

        print(self.val)

        if(self.right != None):
            self.right.traverse()


class Tree(object):
    def __init__(self):
        self.root = None

    def add_node(self, val):
        node = Node(val)
        if self.root == None:
            self.root = node
        else:
            self.root.add_node(node)

    def traverse(self):
        if self.root != None:
            self.root.traverse()

    def get_root(self):
        return self.root


tree = Tree()
for i in range (0, 5):
    tree.add_node(randint(0,10))

print(tree.get_root().traverse())
