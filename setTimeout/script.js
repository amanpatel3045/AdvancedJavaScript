let data = document.getElementById("summer")
function fun(){
  data.innerHTML=`winter`;
}

function change(){
  data.innerHTML='Loading..........';
  setTimeout(fun,3000);
}
