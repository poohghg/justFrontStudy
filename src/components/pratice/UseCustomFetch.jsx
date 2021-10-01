import React, { useMemo, useState } from "react";
import axios from "axios";
import fetchDatas from "./commonfetch/FetchDatas";
import CommonInput from "./common/CommonInput";

async function getUsers() {
  const response = await axios.get(
    "https://jsonplaceholder.typicode.com/users"
  );
  return response.data;
}

const PcUsers = React.memo(({ users }) => {
  console.log(" PcUsers");
  return (
    <div>
      <div> userList</div>
      {users.map((user) => (
        <div key={user.name}>{user.name}</div>
      ))}
    </div>
  );
});

const UseCustomFetch = () => {
  const [state, refetch] = fetchDatas(getUsers, []);
  const [inputs, setInput] = useState({ newUser: "", testState: "" });
  const { loading, data: users, error } = state;

  if (loading) return null;
  if (error) return <div> error!! </div>;
  if (!users) return <div>현재데이터가 없습니다.</div>;

  const changeInputs = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <PcUsers users={users} />
      <button onClick={refetch}> refetch</button>
      <CommonInput
        createType="text"
        name="newUser"
        value={inputs.newUser}
        onChange={changeInputs}
      />
    </>
  );
};

export default UseCustomFetch;
