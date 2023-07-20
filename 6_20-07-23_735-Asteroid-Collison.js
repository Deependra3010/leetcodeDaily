/**
 * @param {number[]} asteroids
 * @return {number[]}
 */
var asteroidCollision = function (asteroids) {
    let res = [];
    for (let i = 0; i < asteroids.length; i++) {
        if (res.length === 0 || asteroids[i] > 0) {
            res.push(asteroids[i]);
        } else {
            while (true) {
                const peek = res[res.length - 1];
                if (peek < 0) {
                    res.push(asteroids[i]);
                    break;
                } else if (peek === Math.abs(asteroids[i])) {
                    res.pop();
                    break;
                } else if (peek > Math.abs(asteroids[i])) {
                    break;
                } else {
                    res.pop();
                    if (res.length === 0) {
                        res.push(asteroids[i]);
                        break;
                    }
                }
            }
        }
    }
    return res;
};
