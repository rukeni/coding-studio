## 한줄 입력

```js
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split(' ');
```

## 여러 줄 입력

```js
const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().split('\n');

```

## 위에 두개가 안될때

```js
const fs = require('fs');
const input = fs.readFileSync(0).toString().trim().split('\n');
```

## 오래된 브라우저에서도 성능체크 하는법

```js

const start = new Date().getTime();

const end = new Date().getTime();

console.log(end - start);

```
