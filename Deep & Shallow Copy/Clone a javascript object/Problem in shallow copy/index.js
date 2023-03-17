let obj={
    name:"bruce",
    address:{
        city:"Noida",
        state:"UP"
    }
}

let user = {...obj}
user.address.city="Gurugram"

console.log(obj)
