//Given a binary tree, returns of all its levels in a bottom-up fashion (i.e. last level towards the root). 
//O(n) time O(n) space

function levelOrderBottom(root) {
    return traverseTree(root, [], 0).reverse();
};

function traverseTree(node, answer, level) {
    if(!node) return answer;

    if(answer[level] === undefined) answer[level] = [];

    answer[level].push(node.val)

    traverseTree(node.left, answer, level+1);
    traverseTree(node.right, answer, level+1)
    return answer;
}