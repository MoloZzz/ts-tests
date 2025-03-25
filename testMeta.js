var handler = {
    get: function (target, name) {
      return name in target ? target[name] : 42;
    },
  };
  var p = new Proxy({}, handler);
  p.a = 1;
  console.log(p.a, p.b); // 1, 42
  
  var revocable = Proxy.revocable(
    {},
    {
      get: function (target, name) {
        return "[[" + name + "]]";
      },
    },
  );
  var proxy = revocable.proxy;
  console.log(proxy.foo); // "[[foo]]"
  
  revocable.revoke();
  
  console.log(proxy.foo); // ошибка TypeError
  proxy.foo = 1; // снова ошибка TypeError
  delete proxy.foo; // опять TypeError
  typeof proxy; // "object", для метода typeof нет ловушек
  Reflect.has(Object, "assign"); // true
  Function.prototype.apply.call(Math.floor, undefined, [1.75]);
  Reflect.apply(Math.floor, undefined, [1.75]);
  // 1;
  
  Reflect.apply(String.fromCharCode, undefined, [104, 101, 108, 108, 111]);
  // "hello"
  
  Reflect.apply(RegExp.prototype.exec, /ab/, ["confabulation"]).index;
  // 4
  
  Reflect.apply("".charAt, "ponies", [3]);
  // "i"
  if (Reflect.defineProperty(target, property, attributes)) {
    // успех
  } else {
    // что-то пошло не так
  }
      