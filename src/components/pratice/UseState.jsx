import React, { useEffect, useState, useCallback } from "react";

// test component
// setState를 이전 state 값을 받아 업데이트 하고 매개변수 없는 함수를 만들어보자

const ListDatas = React.memo(({ id, list, deleteList }) => {
  return (
    <div style={{ textAlign: "center", display: "inline-block" }}>
      <p> curID : {id} </p>
      <div style={{ border: "1px solid black", width: "30vw" }}>
        {list.length !== 0 &&
          list.map((data) => (
            // 하위컴포넌트 내부가아니라 element한테 key를 부여애햐함.
            <ListDiv key={data.id} data={data} deleteList={deleteList} />
          ))}
      </div>
    </div>
  );
});

const ListDiv = React.memo(({ data, deleteList }) => {
  return (
    <p>
      <span>
        id : {data.id} , title : {data.title}{" "}
      </span>
      <button data-id={data.id} onClick={deleteList}>
        리스트 삭제
      </button>
    </p>
  );
});

const Test = () => {
  console.log("render - Test");
  const [id, setId] = useState(0);
  const [list, setList] = useState([]);
  const [title, setTitle] = useState("");

  /**
   * 자바스크립트 엔진은 동기함수를 마주치면 바로 실행할 수 있는 콜스택(Call Stack)에 바로
   * 넣어버리고 비동기함수 등을 마주치면 콜백큐(Callback Queue)에 넣어놓고 일단 대기시킵니다.
   * 그리고 우선순위가 더 높았던 동기함수가 전부 실행되고 콜스택이 비워지면 이벤트루프는
   * 비동기함수를 포함한 콜백큐(Callback Queue)에 있는 함수들을 들어간 순서대로(Queue)
   * 콜스택에 넣어줘서 실행시키도록 해줍니다.
   */
  useEffect(() => {
    console.log("useEffect-rneder");
    if (id !== 0) {
      const curId = id;
      const curTitle = "curTitle_" + String(id);
      const newValue = { id, title: curTitle };
      setList([...list, newValue]);
      setTitle((title) => curTitle);
      // setList(list => list.concat(newValue))
    }
  }, [id]);

  function add() {
    setId((id) => id + 1);
  }

  const deleteList = useCallback((e) => {
    //event 속성 data를 받아옴
    console.log("deleteList - render", e.target.dataset.id);
    const id = Number(e.target.dataset.id);
    // 객체 재할당
    // 현재 넘겨받은 아이디와 같지 않은 아이디를 제외하고 리스트를 다시만듬
    setList((list) => list.filter((data) => data.id !== id));
  }, []);

  //키는 하나의 리스트 최상부에 주어여한다.
  //키를 주는 이유는 React가 돔을 변경,추가,삭제 할때 식별하는 요소 중 하나 이다.
  //주로 고유한 값을 주고, 인덱스를 비선호하는 이유는 리스트내 항목순서가 변경될 수 있기 때문이다.
  //키는 배열내에서만 고유해야하며, 전역적으로 사용되지 않는다.

  return (
    <>
      <ListDatas id={id} list={list} deleteList={deleteList} />
      <div>
        <button onClick={add}> 리스트 추가</button>
      </div>
    </>
  );
};
export default Test;
