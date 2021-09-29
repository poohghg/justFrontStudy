import Reacts, { useState } from "react";
const styleComp = {
  color: "#fff"
};
export default function SplitCodeTest() {
  const [todos, setTode] = useState([]);
  const onClick = () => {
    import("./TesLazyTodo").then(({ TestTodoList }) => {
      const position = todos.length + 1;
      const NewTodo = (
        <TestTodoList
          key={position}
          title={`할일 ${position}`}
          desc={`설명 ${position}`}
        />
      );
      setTode([...todos, NewTodo]);
    });
  };
  return (
    <div>
      <button style={styleComp} onClick={onClick}>
        {" "}
        할 일 추가
      </button>
      <div>{todos}</div>
    </div>
  );
}
