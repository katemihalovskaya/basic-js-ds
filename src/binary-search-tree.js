const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  node;

  root() {
    if (this.node === undefined) {
      return null;
    }
    return this.node;
  }

  add(data) {
    if (this.node == null) {
      this.node = new Node(data);
    } else {
      this.insertRec(this.node, this.node, data);
    }
  }

  insertRec(prevNode, node, data) {
      if (node === null) {
          if (data > prevNode.data) {
              prevNode.right = new Node(data);
          } else if (data < prevNode.data) {
              prevNode.left = new Node(data);
          }
      } else {
          if (data < node.data) {
              this.insertRec(node, node.left, data);
          }
          else if (data > node.data) {
              this.insertRec(node, node.right, data);
          }
      }
  } 

  has(data) {
    let node = this.node;
    while (node !== null) {
      if (node.data === data) {
        return true;
      } else if (data > node.data) {
        node = node.right;
      } else {
        node = node.left;
      }
    }
    return false;
  }

  find(data) {
    let node = this.node;
    while (node !== null) {
      if (node.data === data) {
        return node;
      } else if (data > node.data) {
        node = node.right;
      } else {
        node = node.left;
      }
    }
    return null;
  }

// Inorder traversal of a binary tree

remove(data) {
  let node = this.node;
  this.inorder(node);

  this.Delete(node, data);

  this.inorder(node);
 }

  inorder(node)
 {
     if (node == null)
         return;

     this.inorder(node.left);
     this.inorder(node.right);
 }

 // Function to delete deepest
 // element in binary tree
 deleteDeepest(node, delNode)
 {
     let q = [];
     q.push(node);

     node = null;

     // Do level order traversal until last node
     while (q.length > 0)
     {
         node = q[0];
         q.shift();

         if (node == delNode)
         {
             node = null;
             return;

         }
         if (node.right!=null)
         {
             if (node.right == delNode)
             {
                 node.right = null;
                 return;
         }
         else
             q.push(node.right);
     }

     if (node.left != null)
     {
         if (node.left == delNode)
         {
             node.left = null;
             return;
         }
         else
             q.push(node.left);
     }
 }
 }

 // Function to delete given element
 // in binary tree
  Delete(node, data)
 {
     if (node == null)
         return;

     if (node.left == null &&
        node.right == null)
     {
         if (node.key == data)
         {
               node=null;
               return;
         }
         else
             return;
     }

     let q = [];
     q.push(node);
     node = null 
     let keyNode = null;

     // Do level order traversal until
     // we find key and last node.
     while (q.length > 0)
     {
         node = q[0];
         q.shift();

         if (node.data == data)
             keyNode = node;

         if (node.left != null)
             q.push(node.left);

         if (node.right != null)
             q.push(node.right);
     }

     if (keyNode != null)
     {
         let x = node.data;
         this.deleteDeepest(node, node);
         keyNode.data = x;
     }
 }




  min() {
    let value;
    let node = this.node;
    if (node === null) {
      return null;
    } else {
      while (node !== null) {
          value = node.data;
          node = node.left;
      }
    }
    return value;
  }

  max() {
    let value;
    let node = this.node;
    if (node === null) {
      return null;
    } else {
      while (node !== null) {
          value = node.data;
          node = node.right;
      }
    }
    return value;
  }
}

module.exports = {
  BinarySearchTree
};



 /* if(this.node === undefined) {
      this.node = new Node(data);
    } else {
      while (node !== null) {
        if(data > this.node.data) {
          this.node.right = new Node(data);
        } else {
          this.node.left = new Node(data);
        }
      }
    } */