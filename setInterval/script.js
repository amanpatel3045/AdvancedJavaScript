var data = document.getElementById("counter");
var count=0;
  let refTimer;
 function startTimer(){
  refTimer = setInterval(()=>{
    data.innerHTML=`Counter: ${count}`;
  count++;
  },1000)
}
function stopTimer(){
  clearInterval(refTimer);
}
