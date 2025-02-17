let string = "teste";
let number = 1234;
let boolean = true;
let cars = ["Saab", "Volvo", "BMW"];
let person = {
     name:"pedro",
     age :19,
     height :171
};

function ShowType(variable){
     if(Array.isArray(variable)){
          return "array";
     }else{
          return type = typeof(variable);
     }
     return type;
}

console.log(ShowType(string));
console.log(ShowType(boolean));
console.log(ShowType(cars));
console.log(ShowType(person));