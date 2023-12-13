//algorithm to find the mode of a BST

function findMode(root) {
    const map = new Map();
    let answer = [];

    let modeMap = fillMap(root, map)

    let arr = [...modeMap.values()];
    let max = Math.max(...arr);
    
    modeMap.forEach((value, key) => {
        if(value === max) answer.push(key)
    });

    return answer;
};

function fillMap(node, map) {
    if(node == null) return
    if(map.has(node.val)) {
        map.set(node.val, map.get(node.val) + 1)
    }else{
        map.set(node.val, 1);
    }

    fillMap(node.left, map)
    fillMap(node.right, map)
    return map;
}