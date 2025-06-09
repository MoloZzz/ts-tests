function A(n) {
    var a = 0;
    var b = 1;
    var result = [1];

    for (var i = 0; i < n; i++) {
        var next = a + b;
        
        if (next % 3 === 0 && next % 5 === 0) {
            result.push("fizzbuzz");
        } else if (next % 3 === 0) {
            result.push("fizz");
        } else if (next % 5 === 0) {
            result.push("buzz");
        } else {
            result.push(next);
        }

        a = b;
        b = next;
    }

    return result;
}

var result = A(5);
console.log(result);
