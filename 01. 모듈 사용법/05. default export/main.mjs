// 기본 내보내기(default export) 및 이름 지정 내보내기(named export) 가져오기
import foo, { PI } from "./calculator.mjs";

console.log(PI); // 3.14
console.log(foo(3, 4)); // 7 (default export로 가져온 함수 add의 결과)

/*
  주요 포인트:
  - `import foo`는 `add`라는 default export를 가져왔으며, 이름을 자유롭게 변경할 수 있습니다.
  - `{ PI }`는 이름 지정 내보내기(named export)로, 정확히 `PI`라는 이름을 사용해야 합니다.
*/