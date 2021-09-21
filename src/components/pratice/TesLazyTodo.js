import React from "react"
//code SplitTest
export const TestTodoList = React.memo(({title,desc}) => {
    return(
        <div className="todoList">
            <div>{title}</div>
            <div>{desc}</div>
        </div>  
    );
})
;