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

## 위에 두개가 안될때

```js
const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
```
