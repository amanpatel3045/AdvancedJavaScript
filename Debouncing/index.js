let counter = 0;
const getData = () => {
  //calling api and getting data

  console.log("fetching data...", counter++);
}

//function(fn,delay)=>fn means getData function and delay means
//2 word type krne k bich me jo time lagega wo delay me likhenge
//eg=>delay me 3 second hai and hm first word k baad 3 second yaa 3 second se jyada ka pause lekr
//2nd word likh rhe toh 2nd time function call hoga

const debounce = function (fn, delay) {
    let timer;
  return function () {
 
    let context = this.
    args = arguments;
    clearTimeout(timer);
    timer = setTimeout(() => {
      getData.apply(context, arguments);
    }, delay);
  };
};
//input box me type krne pe better function call hoga
//betterFunction , doSomeMagic ko call karega
//debounce me do arguments hote hai function and delay
const betterFunction = debounce(getData, 300);
