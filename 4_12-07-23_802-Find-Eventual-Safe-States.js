/**
 * @param {number[][]} graph
 * @return {number[]}
 */
var eventualSafeNodes = function(graph) {
    let safe = new Map();
    const isSafe = (i) => {
        if(safe.has(i)) {
            return safe.get(i);
        }
        safe.set(i, false);
        for(let nei of graph[i]){
            if(!isSafe(nei)){
                return safe.get(i)
            }
        }
        safe.set(i, true);
        return safe.get(i);
    }
    let res = [];
    for(let i = 0; i<graph.length; i++){
        if(isSafe(i)){
            res.push(i);
        }
    }
    return res;
};