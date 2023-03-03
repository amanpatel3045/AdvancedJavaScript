// Inherit the properties from obj1 and obj2, inside obj3
// so that obj3 can also access the properties of obj1 and obj2

let obj1 = {a:"value of obj1 object"}

let obj2 = {b:"value of obj2 object"}

let obj3 = {c:"value of obj3 object"}

obj3.__proto__ = obj2

obj2.__proto__ = obj1

// now we can access obj2 annd obj1 from obj3
// with the help of dot operator like this => obj3.a, obj3.b, obj3.c 
