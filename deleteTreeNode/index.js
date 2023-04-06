class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinaryTree {
  constructor(value) {
    this.str = '';
    this.root = value;
  }

  remove(value) {
    this.root = this._removeNode(this.root, value);
  }

  _removeNode(node, value) {
    if (!node) {
      return null;
    }

    if (node.value === value) {
      node = null;
    } else {
      node.left = this._removeNode(node.left, value);
      node.right = this._removeNode(node.right, value);
    }
    return node;
  }

  preOrder(visit) {
    this._preOrder(this.root, visit);
  }

  _preOrder(root, visit) {
    if (root !== null) {
      visit(root.value);
      this._preOrder(root.left, visit)
      this._preOrder(root.right, visit)
    }
  }

}


let tree = new TreeNode(10);
tree.left = new TreeNode(10);
tree.left.left = new TreeNode(40);
tree.left.right = new TreeNode(50);
tree.left.right.left = new TreeNode(70);
tree.left.right.right = new TreeNode(80);

tree.right = new TreeNode(30);
tree.right.left = new TreeNode(60);
tree.right.left.right = new TreeNode(90);


let bt = new BinaryTree(tree);

console.log(bt.remove(0)); // false
console.log(bt.remove(50)); // true
bt.preOrder(console.log); 