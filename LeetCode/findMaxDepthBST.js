//find the max depth of BST, O(n) runtime O(n) space

function maxDepth(root) {
    
    let level = findLevel(root, 0);

    return level;
};

function findLevel(node, level) {
    if(!node) {
        return level;
    }

    return Math.max(findLevel(node.left, level+1), findLevel(node.right, level+1));
}