import React, { useRef, useState, useMemo, useCallback } from 'react';
import UserList from './useMemoComp/UserList';
import CreateUser from './useMemoComp/CreateUser';

    function countActiveUsers(users) {
        console.log('활성 사용자 수를 세는중...');
        return users.filter(user => user.active).length;
    }

    function useAddUser(defalutValue){
        const [users, setUsers] = useState(defalutValue);
        return { users, setUsers}
    }

    function App() {
        console.log("new render")
        const [inputs, setInputs] = useState({
            username: '',
            email: '',
            active : false
        });

        console.log("inputs",inputs)


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
        console.log("inputs",inputs)
        const onChange = useCallback(e => {
            const { name, value} = e.target;
            console.log("name-value : ", name , value)
            setInputs(inputs => ({
            ...inputs,
            [name]: value
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

        console.log("users",users)
        setUsers(users => users.concat(user));
        setInputs({
            username: '',
            email: '',
            active : false
            });
        nextId.current += 1;
        }, [username, email]);

        const onRemove = useCallback(id => {
            // user.id 가 파라미터로 일치하지 않는 원소만 추출해서 새로운 배열을 만듬
            // = user.id 가 id 인 것을 제거함
            setUsers(users => users.filter(user => user.id !== id));
        }, []);

        const onToggle = useCallback(id => {
            setUsers(users =>
            users.map(user =>
            user.id === id ? { ...user, active: !user.active } : user
            )
            );
            }, []);
        const count = useMemo(
            () => countActiveUsers(users)
            , [users]
        );
        // const count = useMemo(
        //     () => countActiveUsers(users)
        //     , [users]
        // );
        return (
            <>
                <CreateUser
                    creatType = {"input"}
                    name = {"username"}
                    value={username}
                    placeholder = {"이름을 입력해주세요"}
                    onChange={onChange}
                    onCreate={onCreate}
                    
                />
                <CreateUser
                    creatType = {"input"}
                    name = {"email"}
                    value={email}
                    placeholder = {"이메일을 입력해주세요"}
                    onChange={onChange}
                    onCreate={onCreate}
                />
                <CreateUser
                    creatType = {"radio"}
                    name = {"active"}
                    value={active}
                    placeholder = {"활동유무를 등록해주세요"}
                    onChange={onChange}
                    onCreate={onCreate}
                />
                <button onClick={onCreate}>등록</button>
                <UserList users={users} onRemove={onRemove} onToggle={onToggle} />
                <div>활성사용자 수 : {count}</div>
            </>
        );
    }   

export default App;