# npm 주요 명령어 정리

## 설치 관련 명령어

### 패키지 설치 (npm install)
- `npm install` 또는 `npm i` 명령어로 패키지를 설치합니다.
- 특정 버전을 설치하려면 `@version`을 사용합니다.
  ```bash
  # 특정 버전 설치 예시
  npm install date-fns@2.29.0
  ```

### 전역 패키지 설치 (--global 또는 -g)
- CLI(Command Line Interface)에서 사용하는 패키지는 `--global` 옵션을 사용해 설치합니다.
  ```bash
  # 전역 패키지 설치 예시
  npm install nodemon --global

  # 설치 후 사용 예시
  nodemon main.mjs
  ```
- 전역 설치된 패키지는 어디서든 사용할 수 있습니다.

### 개발 의존성 패키지 설치 (--save-dev 또는 -D)
- 소프트웨어 개발 시 필요하지만 운영 시에는 불필요한 패키지를 설치할 때 사용합니다.
  ```bash
  # 개발 의존성 설치 예시
  npm install jest --save-dev
  ```
- `--save-dev`로 설치된 패키지는 `package.json`의 `devDependencies` 필드에 기록됩니다.

---

## 패키지 정보 확인 명령어

### 설치된 패키지 목록 확인 (npm list)
- 현재 디렉토리에 설치된 패키지 목록을 확인합니다.
  ```bash
  # 현재 디렉토리의 패키지 목록
  npm list

  # 전역 패키지 목록 확인
  npm list -g
  ```

---

## 업데이트 관련 명령어

### 패키지 업데이트 (npm update)
- 설치된 패키지를 최신 버전으로 업데이트합니다.
  ```bash
  # 모든 패키지 업데이트
  npm update

  # 특정 패키지 업데이트
  npm update pkg_name

  # 전역 패키지 업데이트
  npm update -g

  # 특정 전역 패키지 업데이트
  npm update -g pkg_name
  ```

---

## 패키지 제거 명령어

### 패키지 제거 (npm uninstall)
- 설치된 패키지를 제거합니다.
  ```bash
  # 특정 패키지 제거
  npm uninstall pkg_name

  # 전역 패키지 제거
  npm uninstall -g pkg_name
  ```

---

## 추가 참고 사항

### production 모드 설치
- `npm install --production` 명령어를 사용하거나 Node.js 환경 변수를 `production`으로 설정하면 `devDependencies` 필드에 기록된 패키지들은 설치되지 않습니다.

### 공식 문서 확인
- 패키지의 설치 옵션 및 사용법은 항상 공식 문서에서 확인하는 것이 좋습니다.
