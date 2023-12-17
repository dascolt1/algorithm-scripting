//find the max depth of BST, O(n) runtime O(n) space

function maxDepth(root) {
    
    return findLevel(root, 0);

};

function findLevel(node, level) {
    if(!node) {
        return level;
    }

    return Math.max(findLevel(node.left, level+1), findLevel(node.right, level+1));
}