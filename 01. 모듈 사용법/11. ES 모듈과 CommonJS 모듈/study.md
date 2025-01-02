# 모듈 시스템 개요

## Node.js와 웹 브라우저에서의 모듈 차이

### Node.js에서의 모듈 (CommonJS 모듈)
- Node.js에서 먼저 사용된 모듈 시스템입니다.
- 웹 브라우저 환경에서는 기본적으로 사용 불가능합니다.
- 주요 특징:
  - `require` 문법 사용
  - `module.exports`로 내보내기
- 예시:
  ```javascript
  // CommonJS 모듈 예시
  const fs = require('fs');
  module.exports = function add(a, b) {
      return a + b;
  };
  ```

### ES 모듈 (ECMAScript Modules)
- 2015년(ES6)부터 등장한 자바스크립트 표준 모듈 시스템입니다.
- 주요 특징:
  - `import`와 `export` 문법 사용
  - 웹 브라우저와 Node.js 모두에서 사용 가능
  - Node.js에서는 CommonJS가 기본 모듈 시스템이므로 ES 모듈 사용 시 `.mjs` 확장자나 추가 설정 필요
- 예시:
  ```javascript
  // ES 모듈 예시
  export function add(a, b) {
      return a + b;
  }

  import { add } from './math.mjs';
  console.log(add(1, 2));
  ```

---

## 모듈의 의미

### 웹 브라우저에서의 모듈
- ES 모듈 = 모듈 파일 하나
- JavaScript 코드의 재사용과 분리를 위해 사용

### Node.js에서의 모듈
- CommonJS 모듈에서는 파일 또는 디렉토리를 불러올 수 있음
- 즉, "불러올 수 있는 코드의 묶음"을 의미

---

## 주요 차이점 요약
| 특징                | CommonJS (Node.js)          | ES 모듈 (웹 브라우저/Node.js) |
|---------------------|-----------------------------|------------------------------|
| 사용 가능 환경      | Node.js                    | Node.js, 웹 브라우저         |
| 내보내기 방식       | `module.exports`           | `export`, `export default`   |
| 가져오기 방식       | `require`                  | `import`                     |
| 파일 확장자         | `.js`                      | `.mjs` (Node.js)             |

---

## 참고 사항
- ES 모듈이 표준화되면서 웹 브라우저와 Node.js 모두에서 동일한 방식으로 모듈을 사용할 수 있게 되었습니다.
- 프로젝트에 따라 CommonJS 또는 ES 모듈을 선택적으로 사용해야 할 경우가 있으므로, 각 환경에 맞는 설정과 문법을 익히는 것이 중요합니다.
