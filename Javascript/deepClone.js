const obj1 = { a: 1, b: 2, c: { d: 4, e: 5, f: { g: 6 } } };


const deepClone = (obj)=>{
    
    if (typeof obj !== 'object' || obj === null) {
        return obj;
    }
    const resObj = {};
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                resObj[key] = deepClone(obj[key]);
            }
        }
        return resObj;
    
}

console.log(deepClone(obj1))