## REACT

#### 설치프로세스

------

homebrew install

- 개발환경 세팅을 위한 패키지 관리 툴이다.

- ```
  - /usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/**install**/**master**/**install**)
  - max m1버전
  ```
  
  -- 참조 URL https://designdepot.tistory.com/209
  
  - m1 관련 설정내용
  
  ```
  brew install nvm -- node.js 설치
  npm install -g yarn -- yarn 패키지 관리툴 설치
  yarn global add create-react-app -- 보일럿 파이트 코드를위한 create-react-app 설치
  ```
  
  

#### ROUTER

------

현재 리액트에선 공식적으로 지원하는 ROUTER는 존재하지 않는다.

```
yarn add react-router --라우터 패키지 설치
```

관련 공식문서

https://reactrouter.com/web/guides/quick-start

##### BrowserRouter

HTML5의 history API를 활용하여 UI를 업데이트한다

일반 URL 경로를 사용하는 라우터이다.

##### HashRouter

해시는 서버로 전송되지 않으므로 특별한 서버 구성이 필요않다.

URL의 **hash**를 활용한 라우터이다. 정적인(static)페이지에 적합하다.

##### switch

path에서 출동이 일어나지 않게 라우터들을 관리한다.

요청에 의해 매칭되는 라우터들이 다수 있을때, 제일 먼저 매칭되는 라우터만 선별하여 실행시켜준다

- exact 을 사용하여 URL 목적지의 값을 확인한다



### HOOKS

------

HOOKS 의 정리 이유

최근 프로젝트 진행시 Re-render로 인해 웹서버의 성능 저하가 현저하였고, 이를 방지하고자 기존 Class 컴퍼넌트를 사용하여 개발된 페이지를 완전 함수형 컴포넌트로 변경하여 프로젝트를 진행하려 한다.

이를 이한 기반 스터디 내용이다.

// re-render 관련내용 추후 다시 정리할것

- 