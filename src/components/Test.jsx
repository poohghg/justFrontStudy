import React, { useEffect, useState,useCallback } from "react";

// test component
// setState를 이전 state 값을 받아 업데이트 하고 매개변수 없는 함수를 만들어보자
const Test = () =>{
  
  const [title,setTitle] = useState("");
  const [id,setId] = useState(0);
  const [list,setList] = useState([])


  /**
   * 자바스크립트 엔진은 동기함수를 마주치면 바로 실행할 수 있는 콜스택(Call Stack)에 바로 
   * 넣어버리고 비동기함수 등을 마주치면 콜백큐(Callback Queue)에 넣어놓고 일단 대기시킵니다.
   * 그리고 우선순위가 더 높았던 동기함수가 전부 실행되고 콜스택이 비워지면 이벤트루프는 
   * 비동기함수를 포함한 콜백큐(Callback Queue)에 있는 함수들을 들어간 순서대로(Queue) 
   * 콜스택에 넣어줘서 실행시키도록 해줍니다.
   */

  useEffect(()=>{

  },[])
  
  function add(){
    console.log("id : " , id)
    setId((id) => id+1)
    setTitle((title) => "title_" + String(id));
    // log - 0
    console.log("setId : " , id)
  }


  function deleteList(e){
    //event 속성 data를 받아옴
    console.log("e.target",e.target.dataset.id)
    const id = Number(e.target.dataset.id);
    
    // 객체 재할당
    // 현재 넘겨받은 아이디와 같지 않은 아이디를 제외하고 리스트를 다시만듬
    const newList = list.filter(data => data.id !==id);
    setList(list => newList);
  }

  //키는 하나의 리스트 최상부에 주어여한다.
  //키를 주는 이유는 React가 돔을 변경,추가,삭제 할때 식별하는 요소 중 하나 이다.
  //주로 고유한 값을 주고, 인덱스를 비선호하는 이유는 리스트내 항목순서가 변경될 수 있기 때문이다.
  //키는 배열내에서만 고유해야하며, 전역적으로 사용되지 않는다.

  return(
    <>
      <p> curID : {id} </p>
      {list.map((listDatas,index) => (
        <div key={listDatas.id}>
          <p> 
            <span > id : {listDatas.id} , title : {listDatas.title} </span>
            <button data-id={listDatas.id} onClick={deleteList}> 리스트 삭제</button>
          </p>
        </div>        
      ))}
      <div>
        <button onClick={add}> 리스트 추가</button>
      </div>
    </>
  )

};
export default Test;