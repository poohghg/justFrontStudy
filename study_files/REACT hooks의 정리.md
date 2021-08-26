### HOOkS

------

REACT HOOK관련 정리문서















### ReactMemo

React Memo 는 고차컴포넌트 이다.

해당 컴포넌트가 동일한 props로 동일할 결과를 렌더링한다면, React.memo를 호출하고 결과를 메모이징 하도록 래핑하여 경우에 따라 성능을 향상을 누릴 수 있다. 즉 React는 컴포넌트를 렌더링 하지 않고 마지막으로 렌더링된 결과를 재사용한다.

이는 React Memo로 싸여진 컴퍼넌트는 Props 변화에만 영향을 받는다. 즉 하위 컴포넌트의 일반적인 변화 useState,useReducer,useContext 혹은 state,contextrk로 리렌더링 되지 않은이상 부모컴퍼넌트의 변화로 다시 렌러링 되지 않는 것을 의미한다.

*** Shallow compare대하여 이해하여야 한다.
얕은 비교만 수행하기에 (함수를 내려줄때는 => useCallBack) 또는 두번째 인자로 areEqual(prevProps,nextProps){} 를 사용하여야 한다.
참조

> 주의
>
> class 컴포넌트의 [`shouldComponentUpdate()`](https://ko.reactjs.org/docs/react-component.html#shouldcomponentupdate) 메서드와 달리, `areEqual` 함수는 props들이 서로 같으면 `true`를 반환하고, props들이 서로 다르면 `false`를 반환합니다. 이것은 `shouldComponentUpdate`와 정반대의 동작입니다.

------

REACT 공식문서 - https://ko.reactjs.org/docs/hooks-intro.html
실전 리액트 프로그래밍 -이재승
https://react.vlpt.us/ -벨로퍼트님 깃북
