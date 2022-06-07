## 한줄 입력

```js
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split(' ');
```

## 여러 줄 입력

```js
let fs = require('fs');
let input = fs.readFileSync('/dev/stdin').toString().split('\n');

```