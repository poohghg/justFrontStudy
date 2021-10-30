## REACT

#### 설치프로세스

---

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

---

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

---

HOOKS 의 정리 이유

최근 프로젝트 진행시 Re-render로 인해 웹서버의 성능 저하가 현저하였고, 이를 방지하고자 기존 Class 컴퍼넌트를 사용하여 개발된 페이지를 완전 함수형 컴포넌트로 변경하여 프로젝트를 진행하려 한다.

이를 이한 기반 스터디 내용이다.

// re-render 관련내용 추후 다시 정리할것

-

## REACT

getDerivedStateFromProps는 props로 받아온 것을 state에 넣어주고 싶을때 사용

static getDerivedStateFromProps(nextProps, prevState) { _// 여기서는 setState 를 하는 것이 아니라_ _// 특정 props 가 바뀔 때 설정하고 설정하고 싶은 state 값을 리턴하는 형태로_ _// 사용됩니다._ _/\* if (nextProps.value !== prevState.value) { return { value: nextProps.value }; } return null; // null 을 리턴하면 따로 업데이트 할 것은 없다라는 의미 \*/_ }

ex)
constructor(props) {
super(props);
this.state = {
test : ""
};
}

static getDerivedStateFromProps(nextProps, prevState){
console.log("nextProps" , nextProps.seperator)
return{test : nextProps.seperator}
}
함수 컴포넌트 사용사 usestate 사용

https://ko.reactjs.org/docs/hooks-state.html

#### LINK TO VS A TAG

\***\* 그 이유는 a 태그의 기본적인 속성은 페이지를 이동시키면서, 페이지를 아예 새로 불러오게됩니다. 그렇게 되면서 우리 리액트 앱이 지니고있는 상태들도 초기화되고, 렌더링된 컴포넌트도 모두 사라지고 새로 렌더링을 하게됩니다.
그렇기 때문에 **Link 컴포넌트를 사용**하는데요, 이 컴포넌트는 HTML5 History API 를 사용하여 **브라우저의 주소만 바꿀뿐, 페이지를 새로 불러오지는 않습니다.\*\*

라우트를 설정한 컴포넌트는 위와 같이 3가지의 특정 props 을 전달받습니다.

**history** : push, replace를 통해 다른 경로로 이동하거나 페이지 전환을 할 수 있습니다.
**location** : 현재 경로에 대한 정보를 지니고 있습니다.
**match** : 어떤 라우트에 매칭 되었는지 정보를 가지고 있습니다.

history로 이동시 props 값 넘겨주기

https://velog.io/@dhlee91/this.props.history.push%EB%A1%9C-props-%EB%84%98%EA%B2%A8%EC%A3%BC%EA%B8%B0

import { withRouter } from 'react-router-dom';

withRouter() 를 통해 export하면 하위컴포넌트에서도 위 함수를 사용할 수 있다.

history push 를 사용할 수 있다.

#### 깊은 복사 VS 얕은 복사

- 기본형에서 얕은 복사

  - 참조형 얕은 복사의 값은 같은 메모리를 바라보고 있음
    - 이는 var a =1; var b = a;
    - 이구조임
  - Array.prototype.slice()
  - 기본적인 Array 구조에서는 복사해도 다른 메모리를 참조
    - 이는 A =[1,2,3] , b=a, b[0]=0 으로 변경해도 잘변경이 되지만
    - 이중리스트 또는 중첩구조에서는 데이터 변경이 불가능
  - `[Symbol.iterator]` 프로퍼티가 존재한다면 이터러블하다고 할 수 있고 반복문을 돌릴 수 있다.
  - 하지만 중첩구조의 Array에서는 원본과 복사본 모두 영향을 받음(_shallow_)
  - 이터레이터의 [...]; 연산으로도 깊은복사가 가능하지 않음.
  - object.assign 또한 깊은복사가 가능하지 않음.

- 깊은 복사

  - JSON.stringify -> 입력 값으로 넘어온 데이터를 문자열로 변형을 시켜주는 메소드
  - JSON.parse 를 통해 문자열을 다시 파싱해서 중첩구조의 배열도 복사가 가능.

- 완벽하게 원본과 사본을 나눠 복사하는 방법
  - lodash 와 ramda 또한 깊은 복사가 가능

#### 성능최적화

---

#### React.memo()

랜더링 결과를 메모이징함으로써, 불필요한 리렌더링을 건너뛴다.

- 이전 렌더된 결과와 비교하여 DOM업데이트를 결정한다
- 주로 하위컴포너트에서 porps값이 변화하지 않을때 사용하면 이점을봄
- 이는 리레더링을 할 때 가상 DOM에서 달라진 부분을 확인하지 않아 성능상의 이점을 얻을 수 있다.
- props의 객체를 비교할때 얕은 비교를 한다.
- **하지만 렌더링될때마다 props값이 변화하는(SSR이 빈번하게 일어난다면)경우는 성능상 좋지않다**
- 깊은 배열을 사용하는 경우 사용하지 말아야한다.
  - 이중리스트 또는 중첩구조의 데이터
- 위는 함수형 컴퍼넌트에서 사용된다

#### `React.PureComponent`

- props와 state를 이용한 얕은 비교를 구현한다는 차이점만이 존재합니다.
- React 컴포넌트의 `render()` 함수가 동일한 props와 state에 대하여 동일한 결과를 렌더링한다면, `React.PureComponent`를 사용하여 경우에 따라 성능 향상을 누릴 수 있습니다.
- 깊은 배열을 사용하는 경우 사용하지 말아야한다.
  - 이중리스트 또는 중첩구조의 데이터
- Class Component에서 react에서 상속받을때 사용

#### JS Promise

- promise는 비동기 작업의 최종완료 또는 실패를 나타내는 **객체**이다.
- 기본적으로 promise는 함수에 콜백을 전달하는 대신에, 콜백을 첨부하는 방식의 객체
- 비동기 처리란 특정 코드의 연산이 끝날 때까지 코드의 실행을 멈추지 않고 다음 코드를 먼저 실행하는 JS의 특징이다.

```
const promise = createAudioFileAsync(audioSettings);
promise.then(successCallback, failureCallback);
```

##### guarantees

- 이는 비동기 함수 호출이며, 이런 관례는 몇 가지 장점을 갖고 있다.
- 콜백 함수를 전달해주는 방식과는 달리 Promise는 다음과 같은 특징을 가지고 있다.
- 콜백은 자바스크립트 Event loop가 현재 실행중인 콜 스택을 완료하기 이전에는 절대 호출되지 않는다.
- 이는 비동기 작업이 성공하거나,실패한뒤에 then을 이용하여 추가한 콜백의 경우에도 이와 같다.
- `then()`을 여러번 사용하여 여러개의 콜백을 추가 할 수 있습니다. 그리고 각각의 콜백은 주어진 순서대로 하나 하나 실행되게 됩니다
- **이는 비동기 호출시에도 코드의 순서를 보장할 수 있다.**

##### chaining

- 보통 하나나 두 개이상의 비동기 작업을 순차적으로 실행해야 하는 상황을 흔히 보게 되는데, 순차적으로 각각의 작업이 이전 단계 비동기 작업이 성공하서 나서 그 결과값을 이용하여 다음 비동기 작업을 실행해야 하는 경우를 의미한다.

#### REACT Async & await

- async/await 키워드를 사용하면 비동기코드를 동기코드처럼 보이게 작성할 수 있다.

### UseRef

---

- useRef는 특정 Dom을 선택할때 주로 사용된다.

- useRef로 관리하는 변수는 값이 변경되더라도 컴포넌트가 리렌더링되지 않는다.

- 리액트 컴포넌트에서의 상태는 상태를 바꾸는 함수를 호출하고 나서 그 다음 렌더링 이후로 업데이트 된 상태를 조회할 수 있는반면, UseRef를 사용하면 설정 후 바로 조회할 수 있다.

  - setTimeOut, setInterval 을 통해서 만들어지 Id
  - 외부 라이브러리를 사용하여 생성된 인스턴스
  - scroll위치

- > `useRef`는 내용이 변경될 때 그것을 알려주지는 *않는다*는 것을 유념하세요. `.current` 프로퍼티를 변형하는 것이 리렌더링을 발생시키지는 않습니다. 만약 React가 DOM 노드에 ref를 attach하거나 detach할 때 어떤 코드를 실행하고 싶다면 대신 [콜백 ref](https://ko.reactjs.org/docs/hooks-faq.html#how-can-i-measure-a-dom-node)를 사용하세요.

- !!! 실제 ref의 current값이 변경되더라도 컴포넌트를 재랜더링하지 않는다.

### Context

---

context를 이용하면 단계마다 일일히 props를 넘겨주지 않고도 컴포너트 트리 전체에 데이터를 제공 할 수 있다.

- 실제 컴포넌트의 트리의 깊이가 길어 질수록 일일히 props를 넘겨주는것은 같은 과정을 반복해야 하고, 복잡해진 트리로 인해 버그가 발생 할 수 있다.
- contect는 React 트리 안에서 전역적으로 볼 수 있는 데이터를 공유하는것이다.
- 부모 컴포넌트에서 컴포넌트 자체를 만들어서 자식 컴포넌트에게 넘겨줄 수 있다.

### useMemo

---

useMemo는 메모리제이션된 값을 반환한다.

useMemo는 생성함수와 의존성 배열을 인자로 받고, 의존성이 변경되었을때만 메모이제이션된 값을 다시 계산한다.

useMemo로 전달된 함수는 렌더링중에 실행된다. 통상적으로 렌더링 중 하지 않는것을 이 함수 내에서 사용하면 안된다. ex) 사이드 이팩트

### Spread

---

스프레드 연산자를 이용하면 배열,문자열,객체 등 반복 가능한 객체를 개별요소로 분리 할 수 있다.

### Rest API

---

rest API는 다음으로 구성되어 있다.

- 자원 - URL
- 행위 - HTTP METHOD
- 표현(Representations)

설계시 가장 중요한 항목 2가지

- 첫번째, URL는 정보의 자원을 표현해야 한다.
- 두번째, 자원에 대한 행위는 HTTP Method(GET, POST, PUT, DELETE)로 표현한다.

HTTP METHOD의 알맞은 역할

POST,GET,PUT,DELETE 이 4가지의 Method를 가지고 CRUD를 할 수 있다.

| POST   | post 를 통해 해당 URL을 요청하면 리소스를 생성한다.                                               |
| ------ | :------------------------------------------------------------------------------------------------ |
| GET    | GET을 통해 해당 리소스를 조회한다. 리소스를 조회하고 해당 도큐멘트에 대한 자세한 정보를 가져온다. |
| PUT    | PUT을 통해 해당 리소스를 수정한다.                                                                |
| DELETE | DELETE를 통해 리소스를 삭제합니다.                                                                |

### useReducer

---

reducer는 현재 상태와 액션객체를 파라미터로 받아와서 새로운 상태를 반환해주는 함수이다. reducer에서 반환하는 상태는 곧 컴포넌트가 지닐 새로운 상태이다.

여기서 action은 업데이트를 위한 정보를 가지고 있으며, 주로 type 값을 지닌 객체 형태로 사용하지만, 꼭 따라야 할 규칙은 없다.

```
const [state, dispatch] = useReducer(reducer, initialState);
```

dispatch는 액션을 발생시키는 함수이고,state는 컴포넌트에서 사용할 상태값이다.

`(state, action) => newState`의 형태로 reducer를 받고 `dispatch` 메서드와 짝의 형태로 현재 state를 반환합니다.

다수의 하윗값을 포함하는 복잡한 정적 로직을 만드는 경우나 다음 state가 이전 state에 의존적인 경우에 보통 useState보다 useReducer를 선호한다. 또한 useReducer는 자세한 업데이트를 트리거 하는 컴포넌트의 최적화할 수 있게 하는데, 이것은 콜백 대신 dispatch를 전달 할 수 있기 때문이다.

```
주의

React는 dispatch 함수의 동일성이 안정적이고 리렌더링 시에도 변경되지 않으리라는 것을 보장합니다. 이것이 useEffect나 useCallback 의존성 목록에 이 함수를 포함하지 않아도 괜찮은 이유입니다.
```

##### 초기화 지연

초기 state를 조금 지연해서 생성할 수도 있다. 이를 위해서는 `init` 함수를 세 번째 인자로 전달합니다. 초기 state는 `init(initialArg)`에 설정될 것입니다.

이것은 reducer 외부에서 초기 state를 계산하는 로직을 추출할 수 있도록 합니다. 또한, 어떤 행동에 대한 대응으로 나중에 state를 재설정하는 데에도 유용합니다.

```
const initialState = {count: 0};

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    default:
      throw new Error();
  }
}

function Counter() {
//useReducer 에 넣는 첫번째 파라미터는 reducer 함수이고, 두번째 파라미터는 초기 상태입니다.
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
    </>
  );
}
```

##### dispatch의 회피

Reducer Hook에서 현재 state와 같은 값을 반환하는 경우 React는 자식을 리렌더링 하지거나 effect를 발생하지 않고 이것들을 회피한다.

dispatch를 통해 반환 되는 새로운 상태의 state가 있다면 컴포넌트를 다시 렌더링 할것이다. 하지만 불필요한 부분은 useMemo or useCallback or dependence array을 통해 렌더링을 방지하면 된다.

### RENDER

---

1.사이드임팩트(useEffect)

​ useEffect는 컴포넌트들이 render와 paint된후 실행되며, 비동기적으로 실행된다. paint된후 실행되기 때문에 useEffect의 영향으로 리패인트가 되면 화면이 깜박이는 경우가 있다.

![img](https://miro.medium.com/max/411/1*7jCVSsm5-gEoXsgmfGqQyw.png)

2.useLayoutEffect

useLayoutEffect의 경우 컴포넌트들이 render된 후 실행되며, 그 이후에 paint가 된다. 이 작업은 동기적으로 실행되며 paint가 되기전에 실행된다.

![img](https://miro.medium.com/max/501/1*unEeZQLWQrxR93Ao8wBDDg.png)

일반적인 함수 컴포넌트의 생명주기

![img](https://media.vlpt.us/images/gwak2837/post/cad5fdd6-1906-4377-88e6-5552437550df/image.png)

### Redux

`useSelector`, `useDispatch`, `useStore` 과 같은 [Hooks](https://react-redux.js.org/api/hooks)를 사용하면 손쉽게 상태를 조회하거나 액션을 디스패치 할 수 있다.

##### 리덕스 규칙

​ 1 . 하나의 애플리케이션에선 단 한개의 스토어를 만들어서 사용해야한다.물론 대규모 프로젝트에서 상태 관리값이 세분화되면 여러개의 스토어를 사용해도 된다.

2. 데이터 불변성을 유지해야 한다. 이는 Immutable 즉 리덕스에서 불변성을 유지해야 하는 이유는 내부적으로 데이터가 변경 되는 것을 감지하기 위하여 [shallow equality](https://redux.js.org/docs/faq/ImmutableData.html#how-redux-uses-shallow-checking) 검사를 하기 때문이다. 이를 통하여 객체의 변화를 감지 할 때 객체의 깊숙한 안쪽까지 비교를 하는 것이 아니라 겉핥기 식으로 비교를 하여 좋은 성능을 유지할 수 있다. 불변성을 가지기 때문에 새로운 객채를 할당해준다. 수정 x 변경 x
3. .리듀서는 순수한 함수여야 한다.
   1. 리듀서 함수는 이전 상태와, 액션 객체를 파라미터로 받습니다.
   2. 이전의 상태는 절대로 건들이지 않고, 변화를 일으킨 새로운 상태 객체를 만들어서 반환합니다.
   3. 똑같은 파라미터로 호출된 리듀서 함수는 **언제나** 똑같은 결과값을 반환해야만 합니다.

리듀서

- 액션 생성함수를 통해 만들어진 객채를 참조하여 새로운 상태를 만드는 함수이다.
- 리듀서는 반드시 불변성을 지켜줘야 한다.

### JS

화살표 함수

function 키워드 대신 => 문자를 사용해서 함수를 구현, 화살표 좌측에는 함수의 파라미터 화살표 우측에는 코드블록이 나온다.

그런데 코드블록 내부에서 바로 return을 하는 경우 다음과 같이 줄여서 사용할 수 있다.

```
const add = (a, b) => a + b;
console.log(add(1, 2));

const add = (a, b) => (a + b);
console.log(add(1, 2));
```

### preventDefault

preventDefault 는 폼제출시 기본동작을 방지 할 수 있다.

#### `requestAnimationFrame` throttling
