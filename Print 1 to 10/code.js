var num=1;
let timerRef = setInterval(()=>{
    console.log(num);
    num++;
    if(num===11){
        clearInterval(timerRef);
    }
},1000)
