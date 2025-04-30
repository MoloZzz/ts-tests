/*
Замикання - це комбінація функції та лексичного оточення, у якому цю функцію було визначено. 
Іншими словами, замикання дає вам доступ до Scope зовнішньої функції з внутрішньої функції.
У JavaScript замикання створюються щоразу під час створення функції, під час її створення.
Мається на увазі, що функція має доступ до змінних з трьох областей видимості:
1. Змінні, які оголошені в глобальному контексті.    
2. Змінні, які оголошені в контексті функції.
3. Змінні, які оголошені в контексті внутрішньої функції.
Це означає, що внутрішня функція має доступ до змінних зовнішньої функції, навіть після того, як зовнішня функція завершила виконання.
Ймовірно, мається на увазі контекст виконання функції. 
*/

//1
console.log(1);
function init() {
    var name = "Mozilla"; // name is a local variable created by init
    function displayName() { // displayName() is the inner function, a closure
        console.log (name); // displayName() uses variable declared in the parent function    
    }
    displayName();    
}
init();

//2
console.log(2);
function makeFunc() {
    var name = "Mozilla";
    function displayName() {
      console.log(name);
    }
    return displayName;
}
  
var myFunc = makeFunc();
myFunc();

//3
console.log(3);

var num = 0;
var obj;
async function doStuff() {
    //Here I want to use a lock object so safely increment "num" and assign a "uniqueID"
    //This function can/will be called simultaniously so only one thread can be inside the lockobject "obj"
    var uniqueID = 0;
    lock(obj)
    {
        num++; //increament this in a threadsafe manner
        uniqueID = num;
    }
    //Do more stuff with: "uniqueID"
}

const result3 = doStuff();
console.log(result3);