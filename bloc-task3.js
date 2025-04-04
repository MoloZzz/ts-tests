const STYLES = {
    fillStyle: { canvas: '#000' },
    strokeStyle: { canvas: '#fff' },
    lineWidth: { canvas: 5 }
};

function ctx() {}

ctx.prototype.__applyStyleState = function (styleState) { 
    var keys = Object.keys(styleState), i, key;
    for (i = 0; i < keys.length; i++) { 
        key = keys[i]; this[key] = styleState[key]; 
    } 
}; 
ctx.prototype.__setDefaultStyles = function () {
     var keys = Object.keys(STYLES), i, key; // keys of object - object selection 
      for (i=0; i<keys.length; i++) { 
        key = keys[i]; this[key] = STYLES[key].canvas; // field selection 
      } 
};
ctx.prototype.__getStyleState = function () {
    var i, styleState = {}, keys = Object.keys(STYLES), key;
    for (i=0; i<keys.length; i++) {
        key = keys[i];
        styleState[key] = this[key];
    }
    return styleState; 
};

const testCtx = new ctx();

// Перевіряємо __setDefaultStyles
testCtx.__setDefaultStyles();
console.log('After __setDefaultStyles:', testCtx);

// Отримуємо поточний стиль
const savedStyle = testCtx.__getStyleState();
console.log('Saved style:', savedStyle);

// Змінюємо стилі вручну
testCtx.fillStyle = '#123';
testCtx.strokeStyle = '#456';
testCtx.lineWidth = 42;

// Перевіряємо, що стиль змінився
console.log('After manual change:', testCtx);

// Відновлюємо стиль зі збереженого
testCtx.__applyStyleState(savedStyle);
console.log('After __applyStyleState:', testCtx);


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