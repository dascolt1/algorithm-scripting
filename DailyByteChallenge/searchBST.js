//Asked by google return a reference to the node that equals val, if none exists return null;


function searchBST(root, val) {
    if(!root) return null;
    if(root.val===val) return root;
    if(val < root.val) return searchBST(root.left, val);
    if(val > root.val) return searchBST(root.right, val);
};