### convertStringToNumber

```
function convertStringToNumber(string, x = 10) {
    var chars = string.split('');
    var number = 0;
    var i = 0;
    while(i < chars.length && chars[i] != '.') {
        number = number * x;
        number += chars[i].codePointAt(0) - '0'.codePointAt(0);
        i++;
    }
    if (chars[i] === '.') {
        i++;
    }
    var fraction = 1;
    while(i < chars.length) {
        fraction = fraction / x;
        number += (chars[i].codePointAt(0) - '0'.codePointAt(0)) * fraction;
        i++;
    }
    return number;
}
```

### convertNumberToString
```
function convertNumberToString(number, x = 10) {
        var integer =  Math.floor(number);
        var fraction = number - integer;
        var string = '';
        var slot = '';
        while (integer > 0) {
            // 取最后一位
            string = String(integer % x) + string;
            integer = Math.floor(integer / x);
        }
        if (fraction > 0) {
            slot = '.';
        }
        while (fraction % 1 > 0) {
            fraction = fraction * x;
        }
        return string + slot + fraction;
    }
```
