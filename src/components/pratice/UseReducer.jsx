import React, { useEffect, useState, useCallback, useReducer } from "react";
import TalkMaskValueNm from "./talkComp/TalkMaskValueNm";
import OnInput from "./common/CommonInput";
import "../../css/TestuseReducer.css";

const StaticBottom = React.memo(() => {
  return (
    <div className="TalkBottomWrap">
      <span>이모티콘</span>
      <div>
        <button> 확인</button>
      </div>
    </div>
  );
});

const initstate = {
  inputs: {
    title: "",
    desc: ""
  },
  users: [
    {
      userId: 0,
      userNm: "",
      title: "",
      phoneNum: null,
      active: false
    }
  ]
};

function reducer(state, action) {
  switch (action.type) {
    case "CHANGE_INPUT":
      return {
        ...state,
        inputs: {
          ...state.inputs,
          [action.name]: action.value
        }
      };
    case "CREATE_USER":
      return {
        ...state,
        // 새로운 객체를 반환
        users: state.users.concat(action.user)
      };
    default:
      return state;
  }
}

const TestUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initstate);
  const users = state;
  const { title, desc } = state.inputs;
  const onChageInput = useCallback((e) => {
    const { name, value } = e.target;
    dispatch({
      type: "CHANGE_INPUT",
      name,
      value
    });
  }, []);

  return (
    <>
      <div className="talckPostWrap">
        <div className="talkActiveNm">톡 등록하기</div>
        <TalkMaskValueNm />
        <OnInput
          createType="text"
          name={"title"}
          value={title}
          placeholder={"제목을 입력해주세요"}
          onChange={onChageInput}
        />
        <OnInput
          createType="text"
          name={"desc"}
          value={desc}
          placeholder={"내용을 입력해주세요"}
          onChange={onChageInput}
        />
      </div>
      <StaticBottom />
    </>
  );
};

export default TestUseReducer;
