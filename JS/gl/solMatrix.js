/*
 * Complete the 'countMatches' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. STRING_ARRAY grid1
 *  2. STRING_ARRAY grid2
 */

function countMatches(grid1, grid2) {
    // Write your code here
    let col1 = []
    let col2 = []
    let result = 0;
    for (let index = 0; index < grid1.length; index++) {
        col1.push(grid1[index].split(''))
        col2.push(grid2[index].split(''))
    }
    for (let i = 0; i < col1.length; i++) {
        for (let j = 0; j < col2.length; j++) {
            if (col1[i][j] != col2[i][j]) {
                col2[i][j] = 1;
                fill(col2, i, j, 1, 2)
            }
        }
    }
    for (let i = 0; i < col1.length; i++) {
        for (let j = 0; j < col2.length; j++) {
            if (col2[i][j] == 1) {
                fill(col2, i, j, 1, 0);
                result++;
            }
        }
    }
    // console.log(result)
    return result
}

function fill(mat, sr, sc, color, newColors) {
    if (Number(sr) < 0 || Number(sr) >= mat.length || Number(sc) < 0 || Number(sc) >= mat[0].length || mat[Number(sr)][Number(sc)] != color) { return; } else {
        mat[Number(sr)][Number(sc)] = newColors;
        fill(mat, Number(sr) + 1, Number(sc), color, newColors);
        fill(mat, Number(sr) - 1, Number(sc), color, newColors);
        fill(mat, Number(sr), Number(sc) + 1, color, newColors);
        fill(mat, Number(sr), Number(sc) - 1, color, newColors);
    }
}