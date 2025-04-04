// Переписати під dont repeat yourself
function copyProps(keys, from, to) {
    for (let i = 0; i < keys.length; i++) {
        to[keys[i]] = from[keys[i]];
    }
    return to;
}

ctx.prototype.__applyStyleState = function (styleState) {
    copyProps(Object.keys(styleState), styleState, this);
};

ctx.prototype.__setDefaultStyles = function () {
    const keys = Object.keys(STYLES);
    const source = {};
    for (let i = 0; i < keys.length; i++) {
        source[keys[i]] = STYLES[keys[i]].canvas;
    }
    copyProps(keys, source, this);
};

ctx.prototype.__getStyleState = function () {
    return copyProps(Object.keys(STYLES), this, {});
};

// Друга задача
const multiply = (a,b,c) => a*b*c;
const add = (a,b,c,d,e) => a+b+c+d+e;
const curry = (f) => {
    const curried = (...args) => {
      if (args.length >= f.length) {
        return f(...args);
      } else {
        return (...nextArgs) => curried(...args, ...nextArgs);
      }
    };
    return curried;
};
  
console.log(curry(add)(1)(2)(3)(4)(5) == add(1,2,3,4,5)) 
console.log(curry(multiply)(1)(2)(3) == multiply(1,2,3))