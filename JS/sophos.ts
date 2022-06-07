const myArr = [1,2,1,3,3,1,2,1,5,1];

function histograma(myArr){
    let cont:number =0;
    for(let i:number =0; i <=myArr.length; i++){
        for(let j:number =0; j<=myArr.length; j++){
            if(i===j){
                cont++;
            }
            console.log("the value: ", i, "appears", cont, "times");
        }
    }
}

histograma(myArr);