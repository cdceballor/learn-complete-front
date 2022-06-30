function matches(grid1, grid2) {
    let col1 = []
    let col2 = []
    for (let index = 0; index < grid1.length; index++) {
        col1.push(grid1[index].split(''))
        col2.push(grid2[index].split(''))
    }
    fakeRegion(col1, col2);
    let matchRegion = realRegion(col1, col2)
    return matchRegion;
}

function fill(mat, inFirstMat, inSecondMat, defaultVal, newVal) {
    if (Number(inFirstMat) < 0 || Number(inFirstMat) >= mat.length || Number(inSecondMat) < 0 || Number(inSecondMat) >= mat[0].length || mat[Number(inFirstMat)][Number(inSecondMat)] != defaultVal) {
        return;
    } else {
        mat[Number(inFirstMat)][Number(inSecondMat)] = newVal;
        fill(mat, Number(inFirstMat) + 1, Number(inSecondMat), defaultVal, newVal);
        fill(mat, Number(inFirstMat) - 1, Number(inSecondMat), defaultVal, newVal);
        fill(mat, Number(inFirstMat), Number(inSecondMat) + 1, defaultVal, newVal);
        fill(mat, Number(inFirstMat), Number(inSecondMat) - 1, defaultVal, newVal);
    }
}

function fakeRegion(col1, col2) {

    for (let i = 0; i < col1.length; i++) {
        for (let j = 0; j < col2.length; j++) {
            if (col1[i][j] != col2[i][j]) {
                col2[i][j] = 1;
                fill(col2, i, j, 1, 2)
            }
        }
    }
}

function realRegion(col1, col2) {

    let result = 0;

    for (let i = 0; i < col1.length; i++) {
        for (let j = 0; j < col2.length; j++) {
            if (col2[i][j] == 1) {
                fill(col2, i, j, 1, 0);
                result++;
            }
        }
    }

    return result;
}

let grid1 = ['001', '011', '100']
let grid2 = ['001', '011', '101']
matches(grid1, grid2)