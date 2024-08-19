const nestedArray = [1, [2, 3, [4, 5]], 6, [[7], [8, 9]]];


const flat = (arr , level)=>{


    if(arr.length === 0 || level === 0) return arr;    

    const  res= [];

    for(let i=0; i<arr.length; i++){

        if(Array.isArray(arr[i])){
            res.push(...flat(arr[i], level-1))
        }
        else{
            res.push(arr[i])
        }
    }
    return res;
}

console.log(flat(nestedArray, 1 ))