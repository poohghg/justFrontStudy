import React from "react";
import axios from "axios";
import fetchDatas from "./commonfetch/FetchDatas";

async function getUsers() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
}

const UseCustomFetch = () => {
  const [state, refetch] = fetchDatas(getUsers, []);
  const { loading, data: users, error } = state;

  console.log(users);
  return <>test</>;
};

export default UseCustomFetch;
