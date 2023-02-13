let name = {
    firstName:"Aman",
    lastName:"Patel"
}

let printFullName = function(city,state){
    console.log(this.firstName + " " + this.lastName +" "+ "from" + " "+ city + " " + state)
}

let printMyName = printFullName.bind(name,"Mumbai","Maharashtra")

printMyName();
