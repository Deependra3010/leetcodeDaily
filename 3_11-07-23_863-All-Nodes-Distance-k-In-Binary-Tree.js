/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
var toGraph = function(root) {
    let adjList = new Map();
    let queue = [root];

    const addToGraph = (e, v) => {
        if(adjList.has(e)) {
            adjList.get(e).push(v);
        }else{
            adjList.set(e, [v])
        }
    }
    while(queue.length) {
        let currNode = queue.shift();
        if(currNode.left){
            queue.push(currNode.left);
            addToGraph(currNode, currNode.left);
            addToGraph(currNode.left, currNode);
        }
        if(currNode.right) {
            queue.push(currNode.right);
            addToGraph(currNode, currNode.right);
            addToGraph(currNode.right, currNode);
        }
    }
    return adjList;
}
/**
 * @param {TreeNode} root
 * @param {TreeNode} target
 * @param {number} k
 * @return {number[]}
 */
var distanceK = function(root, target, k) {
    let adjList = toGraph(root);
    let res = [];
    let depth = 0;
    let visited = new Set();
    let queue = [target];

    while(queue.length && depth <= k) {
        let len = queue.length;
        for (let i = 0; i<len; i++) {
            let currNode = queue.shift();
            visited.add(currNode)
            if(depth === k) {
                res.push(currNode.val);
            }
            if(adjList.has(currNode)){
                for(let j of adjList.get(currNode)){
                    if(!visited.has(j)) {
                        queue.push(j)
                    }
                }
            }
        }
        depth++;
    }
    return res;
};