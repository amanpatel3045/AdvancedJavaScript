Array.prototype.myFilter=function(cb){
    let arr2=[];
    for(let i=0;i<this.length;i++){
        if(cb(this[i])){
            arr2.push(this[i]);
        }
    }
    return arr2;
}

let arr=[1,2,3,4,5];
let ans = arr.myFilter((ele)=>{
    return ele>3;
})

console.log(ans);
