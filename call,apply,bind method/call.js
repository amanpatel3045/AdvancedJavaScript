let name = {
    firstName:"Aman",
    lastName:"Patel"
}

let printFullName = function(city,state){
    console.log(this.firstName + " " + this.lastName +" "+ "from" + " "+ city + " " + state)
}

printFullName.call(name,"Mumbai","Maharashtra")
