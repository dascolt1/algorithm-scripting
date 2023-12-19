//Given a binary tree, return the largest value in each of its levels.

function maxValueInEachLevel(root) {
    let levelVals = traverseTree(root, [], 0);

    let answer = [];

    for(let i = 0;i < levelVals.length;i++) {
        answer.push(Math.max(...levelVals[i]))
    }

    return answer
};

function traverseTree(node, answer, level) {

    if(!node) return answer;
    if(answer[level] === undefined) answer[level] = [];

    answer[level].push(node.val)

    traverseTree(node.left, answer, level+1);
    traverseTree(node.right, answer, level+1)

    return answer;
} 