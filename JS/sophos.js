const myArr = [1,2,1,3,3,1,2,1,5,1];

function histograma(myArr){
    let result=[];
    for(let i =0; i <=myArr.length-1; i++){
        let cont =0;
        for(let j =0; j<=myArr.length-1; j++){
            if(myArr[i]===myArr[j]){
                cont++;
                if(cont===1 && result.indexOf(myArr[i])===-1){
                    result.push(myArr[i]);
                }
            }
        }
        // console.log("the value: ", myArr[i], "appears", printFigure(cont), "times");
        console.log(cont)
    }
}

histograma(myArr);