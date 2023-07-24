/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    if (n == 0) return 1;
    let res = myPow(x, parseInt(n / 2));
    if (n % 2 == 0) return res * res;
    else {
        if (n > 0) return res * res * x;
        else return (res * res) / x;
    }
};
