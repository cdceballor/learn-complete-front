function processLogs(logs, maxSpan){
    const sol =[];
    const id = [];
    const values = [];
    const actions = [];
    let res =0;
    logs.map((_, index)=>{
        id.push(logs[index].split(" ")[0]);
        values.push(logs[index].split(" ")[1]);
        actions.push(logs[index].split(" ")[2]);
    });
    
    for(let i=0; i<id.length; i++){
        for (let x = 0; x < id.length; x++){
            if(id[i] === id[x]){
               res = values[x] - values[i]; 
                if(res > 0){
                    if(res <= maxSpan){
                        sol.push(id[i]);
                    }
                }
            }
        }
    }
    return sol;
}

const arr = [
    "30 99 sign-in", 
    "30 105 sign-out", 
    "12 100 sign-in", 
    "20 80 sign-in", 
    "12 120 sign-out", 
    "20 101 sign-out", 
    "21 110 sign-in",];
const maxSpan = 20;
const sol = processLogs(arr, maxSpan);
console.log(sol);