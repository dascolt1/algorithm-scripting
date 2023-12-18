//gather levels, traverse a BST and return all the nodes in their respective levels

function levelOrder(root) {
    let answer = traverseTree(root, [], 0);

    return answer;
};

function traverseTree(node, answer, level) {

    if(!node) return answer;
    if(answer[level] === undefined) answer[level] = [];

    answer[level].push(node.val)

    traverseTree(node.left, answer, level+1);
    traverseTree(node.right, answer, level+1)

    return answer;
}