function customMap(arr, callback){
    if(!Array.isArray(arr)){
        console.log("Error");
        return;
    }
    const resultA = [];
    for(let i=0; i<arr.length; i++){
    const result = callback(arr[i],i,arr);
    resultA.push(result);
    }
    return resultA;
}
const Arr =[12, 11, 19, 8, 4];

const mappedA=customMap(Arr,function (element,index,array){
    return element*2+index; 
});
console.log(mappedA);
