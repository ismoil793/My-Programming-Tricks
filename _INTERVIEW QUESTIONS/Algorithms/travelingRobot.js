// our robot is located on x=1, y=1

function paths(x, y) { // x and y are coordinates of exit
    if(x < 1 || y < 1) {
        return 0; // if exit is on left side or bottom of robot - There is no way for exit 
    }
    if(x === 1 && y === 1) {
        return 1; // Robot and Exit are on same place
    }
    return paths(x-1, y) + paths(x, y-1);
}

// ------------------------- Big O(2^(x+y))