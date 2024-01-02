//Easy LC problem to find the average of all levels in a BST can be solved in O(N) time O(N) space

var averageOfLevels = function(root) {
    let arr = traverse(root, 0, []);
    let answer = [];
    
    
    for(let i = 0;i < arr.length;i++) {
        let sum = 0;
        for(let j = 0;j < arr[i].length;j++) {
            sum +=  arr[i][j];
            answer[i] = sum / arr[i].length;
        }
    }

    return answer;
};

function traverse(node, level, arr) {
    if(!node) return arr;

    if(arr[level] === undefined) arr[level] = [];

    arr[level].push(node.val)

    traverse(node.left, level+1, arr);
    traverse(node.right, level+1, arr)

    return arr;
}