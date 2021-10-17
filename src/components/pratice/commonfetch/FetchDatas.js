import { useReducer, useEffect } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "LOADING":
      return {
        loading: true,
        data: null,
        error: null
      };
    case "SUCCESS":
      return {
        loading: false,
        data: action.data,
        error: null
      };
    case "ERROR":
      return {
        loading: false,
        data: null,
        error: action.error
      };
    default:
      throw new Error(`reducer-error type ${action.type}`);
  }
}

// action이 일어날때 state값들은 변경됨
const initState = {
  loading: true,
  data: null,
  error: null
};

function useFetchDatas(callback, dpes = []) {
  const [state, dispatch] = useReducer(reducer, initState);
  const fetch = async () => {
    // dispatch({ type: "LOADING" });
    try {
      const data = await callback();
      dispatch({ type: "SUCCESS", data: data });
    } catch (e) {
      dispatch({ type: "ERROR", error: e });
    }
  };

  useEffect(() => {
    fetch();
  }, dpes);

  return [state, fetch];
}

export default useFetchDatas;
