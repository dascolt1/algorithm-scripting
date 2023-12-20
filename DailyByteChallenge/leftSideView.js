//Return the left side of the tree if a person was looking from left side

function leftSideView(root) {
    return traverseTree(root, 0, [])
};

function traverseTree(node, level, answer) {
    if(!node) return answer;
    answer[level] = node.val;
    traverseTree(node.right, level+1, answer)

    return traverseTree(node.left, level+1, answer)
}