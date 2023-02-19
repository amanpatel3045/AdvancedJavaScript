const myPromise = new Promise((resolved,rejected)=>{
    const a=5;
    const b=2;
    const c=a+b;
    if(c===10){
        resolved('Yes');
    }else{
        rejected('No');
    }
});
myPromise.then((yes)=>{
    console.log(yes);
}).catch((err)=>{
    console.log(err);
})
