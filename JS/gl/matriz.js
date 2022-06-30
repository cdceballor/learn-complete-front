function matches(grid1, grid2) {
    let col1 = []
    let col2 = []
    let result = 0;
    for (let index = 0; index < grid1.length; index++) {
        col1.push(grid1[index].split(''))
        col2.push(grid2[index].split(''))
    }
    for (let index = 0; index < col1.length; index++) {
        if (col1[index][index].match(col2[index][index])) {
            if (col1[index][index] == 1) {
                result = result + 1;
            }
        }
    }
    console.log(result);
}

let grid1 = ['0010', '0111', '0100', '1111']
let grid2 = ['0010', '0111', '0110', '1111']
matches(grid1, grid2);