const counter = (str)=>{

    const res = str.split('').reduce((acc, curr)=>{

        if(acc[curr]){
            acc[curr]++
        }
        else{
            acc[curr] = 1   
        }
        return acc;
    },{})

    return res;
}

console.log(counter('aabbc'))