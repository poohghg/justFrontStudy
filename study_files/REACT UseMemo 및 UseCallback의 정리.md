### Shallow compare

------

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

### useCallback

------

useCallback의 사용이유 현재 하위 컴포넌트에 전달하는 콜백 함수를 inline 함수로 사용하고 있다거나, 컴포넌트 내에서 함수를 생성하고 있다면 새로운 함수 참조값을 계속해서 만들고 있는 것, 다시 말해 부모컴포넌트의 렌더링시 같은 함수를 계속해서 만들어 메모리에 할당하는 것이다.

-> 리액트팀에서는 함수생성이 성능에 미치는 영향을 작다고 주장한고 있다.

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

  

### ReactMemo

------

React Memo 는 고차컴포넌트 이다.

해당 컴포넌트가 동일한 props로 동일할 결과를 렌더링한다면, React.memo를 호출하고 결과를 메모이징 하도록 래핑하여 경우에 따라 성능을 향상을 누릴 수 있다. 즉 React는 컴포넌트를 렌더링 하지 않고 마지막으로 렌더링된 결과를 재사용한다.

이는 React Memo로 싸여진 컴퍼넌트는 Props 변화에만 영향을 받는다. 즉 하위 컴포넌트의 일반적인 변화 useState,useReducer,useContext 혹은 state,contextrk로 리렌더링 되지 않은이상 부모컴퍼넌트의 변화로 다시 렌러링 되지 않는 것을 의미한다.

*** Shallow compare대하여 이해하여야 한다.
얕은 비교만 수행하기에 (함수를 내려줄때는 => useCallBack) 또는 두번째 인자로 areEqual(prevProps,nextProps){} 를 사용하여야 한다.
참조

useMemo 고차컴포넌트이기에 함수를 깜싸서 사용하면된다. 두번째 매개변수에 의존성 배열로 넣어주어 사용할 수 도있다.

> 주의
>
> class 컴포넌트의 [`shouldComponentUpdate()`](https://ko.reactjs.org/docs/react-component.html#shouldcomponentupdate) 메서드와 달리, `areEqual` 함수는 props들이 서로 같으면 `true`를 반환하고, props들이 서로 다르면 `false`를 반환합니다. 이것은 `shouldComponentUpdate`와 정반대의 동작입니다.

------

REACT 공식문서 - https://ko.reactjs.org/docs/hooks-intro.html
실전 리액트 프로그래밍 -이재승
https://react.vlpt.us/ -벨로퍼트님 깃북

