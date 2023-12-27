//Given a binary tree, return the sum of all left leaves of the tree.

function sumOfLeftLeaves(root) {
    let answer = 0;
    function traverseTree(node, left) {

    if(!node) return;

    if(node.left === null && node.right === null && left === true) {
        answer = answer + node.val
    }

    traverseTree(node.left, true, answer);
    traverseTree(node.right, false, answer);

    return answer;
}
     
    return traverseTree(root, false);
};