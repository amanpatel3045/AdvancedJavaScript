let name={
    firstName:"Aman",
    lastName:"Patel"
}

const printFullName = function(){
    console.log(this.firstName + " " + this.lastName);
}

Function.prototype.mybind = function(...args){
    let obj=this
    return function(){
        obj.call(args[0]);
    }
}

const printName=printFullName.mybind(name);
printName();
