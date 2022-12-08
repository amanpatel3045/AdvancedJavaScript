let data = document.getElementById("head");
let dataID=setTimeout(()=>{
  data.innerHTML=`started`;
},3000)

function stops(){
  clearTimeout(dataID);
}
