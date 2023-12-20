//function thatn returns which level has the max sum

function maxLevelSum(root) {
    let maxLevel = 0;
    let max = Number.NEGATIVE_INFINITY;

    let nodeArr = traverseTree(root, 1, []);
   
    for(let i = 1; i < nodeArr.length;i++) {
        if(nodeArr[i].length === 1 && nodeArr[i][0] > max) {
            max = nodeArr[i][0];
            maxLevel = i;
        } 

            let sum = 0;
            for(let j = 0;j < nodeArr[i].length;j++) {  
                sum += nodeArr[i][j];
            }
            if(sum > max) {
                max = sum;
                maxLevel = i;
            }
            sum = 0;
    }

    return maxLevel;
};


function traverseTree(node, level, nodeArr) {
    if(!node) return nodeArr;

    if(nodeArr[level] === undefined) nodeArr[level] = [];

    nodeArr[level].push(node.val)

    traverseTree(node.left, level+1, nodeArr);
    traverseTree(node.right, level+1, nodeArr);

    return nodeArr;
}