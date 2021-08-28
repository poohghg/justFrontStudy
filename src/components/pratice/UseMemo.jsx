import React, { useRef, useState, useMemo, useCallback } from 'react';
import UserList from './useMemoComp/UserList';
import CreateUser from './useMemoComp/CreateUser';
import "../../css/useMemo.css"

    function countActiveUsers(users) {
        return users.filter(user => user.active).length;
    }

    function useAddUser(defalutValue){
        const [users, setUsers] = useState(defalutValue);
        return { users, setUsers}
    }

    function App() {
        console.log("new render")
        //초기값 세팅
        const [inputs, setInputs] = useState({
            username: '',
            email: '',
            active: false
        });
        const [users, setUsers] = useState([
            {
              id: 1,
              username: 'velopert',
              email: 'public.velopert@gmail.com',
              active: true
            },
            {
              id: 2,
              username: 'tester',
              email: 'tester@example.com',
              active: false
            },
            {
              id: 3,
              username: 'liz',
              email: 'liz@example.com',
              active: false
            }
          ]);
        const { username, email, active } = inputs;
        // event의 value값은 string으로 넘어옴 !!!! 주의
        // checkd 값은 boolean으로 넘어옴
        const onChange = useCallback(e => {
            console.log("e.target.checked : ",e.target.checked)
            const { name, value, checked} = e.target;
            const newValue = name === "active" ? checked : value;
            setInputs(inputs => ({
                ...inputs,
                [name]: newValue
            }));
        }, []);

        const nextId = useRef(4);
        const onCreate = useCallback(() => {
            const user = {
                id: nextId.current,
                username,
                email,
                active
            };
            setUsers(users => users.concat(user));
            setInputs({
                username: '',
                email: '',
                active : false
                });
        nextId.current += 1;
        }, [username, email, active]);

        const onRemove = useCallback(id => {
            setUsers(users => users.filter(user => user.id !== id));
        }, []);

        const onToggle = useCallback(id => {
            setUsers(users =>
                users.map(user =>
                    user.id === id ? { ...user, active: !user.active } : user
            )
        );
        },[]);
        
        const count = useMemo(
            () => countActiveUsers(users)
            , [users]
        );
        return (
            <div className="postWarp">
                <div className="postForm">
                    <p>사용자 등록폼</p>
                    <CreateUser
                        creatType = {"input"}
                        name = {"username"}
                        value={username}
                        placeholder = {"이름을 입력해주세요"}
                        onChange={onChange}
                    />
                    <CreateUser
                        creatType = {"input"}
                        name = {"email"}
                        value={email}
                        placeholder = {"이메일을 입력해주세요"}
                        onChange={onChange}
                    />
                    <CreateUser
                        creatType = {"checkbox"}
                        name = {"active"}
                        value={active}
                        placeholder = {"활동유무를 등록해주세요"}
                        onChange={onChange}
                    />
                    <button onClick={onCreate}>등록</button>
                </div>
                <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
                <div>활성사용자 수 : {count}</div>
            </div>
        );
    }   

export default App;