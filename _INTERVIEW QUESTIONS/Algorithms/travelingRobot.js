// our robot is located on x=1, y=1

function paths(x, y) { // x and y are coordinates of exit
    if (x < 1 || y < 1) {
        return 0; // if exit is on left side or bottom of robot - There is no way for exit 
    }
    if (x === 1 && y === 1) {
        return 1; // Robot and Exit are on same place
    }
    return paths(x - 1, y) + paths(x, y - 1);
}
// ------------------------- Big O(2^(x+y))

console.log(paths(5, 4))



function numberOfPaths(m, n) {
    // We have to calculate m+n-2 C n-1 here
    // which will be (m+n-2)! / (n-1)! (m-1)!
    var path = 1;
    for (i = n; i < (m + n - 1); i++) {
        path *= i;
        path = parseInt(path / (i - n + 1));
    }
    return path;
}
// ------------------------- Big O(m+n)

console.log(numberOfPaths(5, 4))