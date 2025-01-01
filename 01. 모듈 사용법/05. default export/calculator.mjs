// Named Export
export const PI = 3.14;

// Default Export
export default function add(a, b) {
    return a + b;
}

/*
  주의사항 및 특징:
  1. `export default`는 함수나 클래스와 같이 선언문 앞에서만 사용할 수 있으며, 변수(let, const)에는 사용할 수 없습니다.
     예시: export default function add(a, b) { return a + b; }
  2. 모듈당 하나의 `default`만 가질 수 있습니다.
  3. 기본 내보내기(default export)는 가져올 때 중괄호 없이 임의의 이름으로 가져올 수 있습니다.
     예시: import foo from './calculator.mjs';
  4. 기본 내보내기 외에도, 이름을 지정한 내보내기(named export)를 추가로 사용할 수 있습니다.
     예시: export const PI = 3.14;
  5. 이름 지정 내보내기(named export)는 가져올 때 중괄호를 사용하며, 가져올 이름과 동일해야 합니다.
     예시: import { PI } from './calculator.mjs';
*/