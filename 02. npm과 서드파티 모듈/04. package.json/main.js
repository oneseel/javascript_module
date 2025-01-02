// package.json 이라는 파일을 가진 디렉토리 : 패키지
// package.json은 현재 패키지에 대한 정보가 기록되어있는 곳

// dependencies : 패키지가 의존하는 다른 패키지들의 목록
// type : 타입의 종류 ex) module, commonjs
// scripts : 명령어들을 등록할 수 있는 곳
// start : npm start 명령어로 실행할 명령어를 등록하는 곳
// test : npm test 명령어로 실행할 명령어를 등록하는 곳

import { format } from "date-fns";
import { add } from "./calculator.js";

const dateString = format(new Date(2025, 0, 2), "MM/dd/yyyy");

console.log(dateString);  // 출력: 02/02/2025
console.log(add(1, 2));   // 출력: 3
