module.exports = function solveSudoku(matrix) {
  return parseGrid(matrix)
}
function parseGrid(grid) {
    let nGrid;
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
             if (!grid[row][col]) {
                for (let candidate = 1; candidate < 10; candidate++) {
                    if (checkRowColumn(grid, row, col, candidate) && checkBox(grid, row, col, candidate)) {
                        grid[row][col] = candidate;
                        nGrid = parseGrid(grid);
                        if (nGrid) {
                            return grid
                        }
                        grid[row][col] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}

function checkRowColumn(grid, row, col, candidate) {
    for (let i = 0; i < 9; i++) {
        if (i != row && grid[i][col] == candidate || i != col && grid[row][i] == candidate) {
            return false;
        }
    }
    return true;
}

function checkBox(grid, row, col, candidate) {
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (i != row && j != col && grid[Math.floor((row / 3)) * 3 + i][Math.floor((col / 3)) * 3 + j] == candidate) {
                return false;
            }
        }
    }
    return true
}
