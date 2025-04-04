// Не змінюючи логіки, змінити структуру коду, щоби вона відповідала принципу DRY
ctx.prototype.__applyStyleState = function (styleState) { 
    var keys = Object.keys(styleState), i, key;
    for (i = 0; i < keys.length; i++) { 
        key = keys[i];
        this[key] = styleState[key]; 
    } 
}; 
ctx.prototype.__setDefaultStyles = function () {
     var keys = Object.keys(STYLES), i, key; // keys of object - object selection 
      for (i = 0; i < keys.length; i++) { 
        key = keys[i];
        this[key] = STYLES[key].canvas; // field selection 
      } 
};
ctx.prototype.__getStyleState = function () {
    var i, styleState = {}, keys = Object.keys(STYLES), key;
    for (i = 0; i < keys.length; i++) {
        key = keys[i];
        styleState[key] = this[key];
    }
    return styleState; 
};

// Друга задача
const multiply = (a,b,c) => a*b*c;
const add = (a,b,c,d,e) => a+b+c+d+e;
const curry = (f) => { /* write your solution here */ }

curry(add)(1)(2)(3)(4)(5) == add(1,2,3,4,5) // should be true curry(multiply)(1)(2)(3) == multiply(1,2,3) // should be true