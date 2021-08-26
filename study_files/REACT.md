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

##### shallow compare

React가 리렌더되는 시점

- state 변경이 있을때
- 부모 컴퍼넌트가 렌더링 될 때
- 새로운 props가 들어올때
- shouldComponentUpdate에서 true가 반환될 때
- forceUpdate가 실행될 때

##### Shallow compare

얕은 비교란 **객체,배열,함수**와 같은 참조 타입들을 실제 내부 값까지 비교하지 않고 동일 참조인지(동일한 메모리값을 사용하는지)를 비교함

* 이는 state의 push,pop,shite .. 등의 원본을 변형하는 메소드를 사용하면 안되는 이유이기도 하다
* immutable의 중요성이다.

상위 컴퍼넌트의 state가 변경되면 상위 컴포넌트가 리렌더링시 하위 컴포너트에 넘겨주는 props가 새롭게 생성되고 이때 **props에 참조 타입**이 있다면 동일한 값이라도 동일 참조 값이 아니므로 얕은 비교를 통해 새로운 값으로 판단하여 리렌더링을 일으키는 것이다.

##### useCallback

useCallback의 사용이유 현재 하위 컴포넌트에 전달하는 콜백 함수를 inline 함수로 사용하고 있다거나, 컴포넌트 내에서 함수를 생성하고 있다면 새로운 함수 참조값을 계속해서 만들고 있는 것, 다시 말해 똑같은 모양의 함수를 계속해서 만들어 메모리에 할당하는 것이다.

주로 부모컴포넌트에서 공통함수를 만들어 내려주는 형식.

- 이는 의존성에 포함된 값이 변경되지 않으면 이전에 생성한 함수 참조 값을 반환해주는 것이다.

> 인라인 콜백과 의존성 값의 배열을 전달한다. useCallback은 콜백의 메모이제이셔션된 버전을 반환할 것이다. 이는 콜백의 의존성이 변경되었을때만  반환 할것이다. 이는 불필요한 리렌더링을 방지 할 수 있다.
>
> `useCallback(fn, deps)`은 `useMemo(() => fn, deps)`와 같다
>
> -REACT 공식문서

> 주의
>
> 의존성 값의 배열이 콜백에 인자로 전달되지는 않습니다. 그렇지만 개념적으로는, 이 기법은 콜백 함수가 무엇일지를 표현하는 방법입니다. 콜백 안에서 참조되는 모든 값은 의존성 값의 배열에 나타나야 합니다. 나중에는 충분히 발전된 컴파일러가 이 배열을 자동적으로 생성할 수 있을 것입니다.
>
> [`eslint-plugin-react-hooks`](https://www.npmjs.com/package/eslint-plugin-react-hooks#installation) 패키지의 일부로써 [`exhaustive-deps`](https://github.com/facebook/react/issues/14920) 규칙을 사용하기를 권장합니다. 그것은 의존성이 바르지 않게 정의되었다면 그에 대해 경고하고 수정하도록 알려줍니다.

- 인라인 함수 및 컴포넌트 자체 컴포넌트를 사용하여 함수를 바인딩 할시 참조타입의 변화로 매번 자식 컴퍼넌트를 렌더함