import React, { useEffect, useState, useCallback, useReducer } from "react";
import TalkMaskValueNm from "./talkComp/TalkMaskValueNm";
import "../../css/TestuseReducer.css";

const initstate = {
  inputs: {
    userNm: "",
    title: "",
    phoneNum: null,
    active: false
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
          ...state.input,
          [action.nmae]: action.value
        }
      };
    case "CREATE_USER":
      return {
        ...state,
        user: state.users.concat(action.user)
      };
    default:
      return state;
  }
}

const TestUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initstate);
  const users = state;
  const { userNm, title, phoneNum, active } = state.inputs;

  return (
    <div class="talckPostWrap">
      <div className="talkActiveNm">톡 등록하기</div>
      <TalkMaskValueNm />
      <div class="talkPostSection">
        <input
          className="talkTitleInput"
          type="input"
          name={"title"}
          placeholder={"제목을 입력해주세요"}
        />
      </div>
    </div>
  );
};

export default TestUseReducer;
