// Third-party modules and npm usage

// 서드파티 모듈은 인터넷의 npm(Node Package Manager) registry에서 다운로드 받아 사용할 수 있습니다.
// 예: date-fns 모듈 설치 및 사용법

// date-fns 모듈 설치 명령:
// npm install date-fns

// Node.js 환경에서는 node_modules 폴더에 설치된 모듈들이 저장됩니다.
// 설치 시 date-fns가 의존하는 다른 모듈들도 자동으로 함께 설치됩니다.

// date-fns를 사용한 날짜 포매팅 예제
import { format } from "date-fns";

const dateString = format(new Date(2025, 0, 2), "MM/dd/yyyy");
// new Date에서 month는 0부터 시작 (0: January, 1: February, ...)

console.log(dateString); // 출력: 02/02/2025

/*
  주요 내용:
  1. `date-fns`는 날짜를 다루기 위한 서드파티 모듈로, 간편한 날짜 포매팅 및 계산 기능을 제공합니다.
  2. npm을 통해 설치하며, Node.js 프로젝트의 의존성 관리에 사용됩니다.
  3. 설치된 모듈은 `node_modules` 폴더에 저장됩니다.
  4. 설치된 모듈을 사용하는 방법은 `import`를 통해 해당 기능을 불러오는 것입니다.
*/