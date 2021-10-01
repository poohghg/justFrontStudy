import React, { useMemo, useState } from "react";
import axios from "axios";
import fetchDatas from "./commonfetch/FetchDatas";
import CommonInput from "./common/CommonInput";
import "../../css/users/users.css";

async function getUsers() {
  const response = await axios.get(
    "https://api.unsplash.com/photos?page=1&per_page=30&client_id=m__Zo30STAoUtS6JfvLC3Psc4_ZAR4eV85gjEDh6jIY"
  );
  return response.data;
}

const PcUsers = React.memo(({ users }) => {
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
  // const response = axios.get();
  // response.then((res) => console.log(res));
  // console.log("res");
  const [state, refetch] = fetchDatas(getUsers, []);
  const [inputs, setInput] = useState({ newUser: "", testState: "" });
  console.log("state", state);

  // const [userId, setUserId] = useState(null);
  // const { loading, data: users, error } = state;

  // if (loading) return null;
  // if (error) return <div> error!! </div>;
  // if (!users) return <div>현재데이터가 없습니다.</div>;

  // const changeInputs = (e) => {
  //   const { name, value } = e.target;
  //   setInput((prev) => ({ ...prev, [name]: value }));
  // };

  return (
    <>
      {/* <div className="usersWrap">
        <PcUsers users={users} />
        <button onClick={refetch}> refetch</button>
        <CommonInput
          createType="text"
          name="newUser"
          value={inputs.newUser}
          onChange={changeInputs}
        />
      </div> */}
    </>
  );
};

export default UseCustomFetch;
