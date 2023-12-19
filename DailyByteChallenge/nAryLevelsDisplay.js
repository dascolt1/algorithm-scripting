//Given an n-ary tree, return its level order traversal.
//root = [1,null,3,2,4,null,5,6]
//[[1],[3,2,4],[5,6]]

function levelOrder(root) {
    return traverseTree(root, 0, [])
};

function traverseTree(node, level, answer) {
    if(!node) return;
    if(answer[level] === undefined) answer.push([]);

    answer[level].push(node.val);
    
    for(let i = 0;i < node.children.length;i++) {
        traverseTree(node.children[i], level+1, answer)
    }

    return answer;
}