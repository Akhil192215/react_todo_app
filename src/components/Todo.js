import React from 'react'

function Todo({ text, todos, todo, setTodos }) {
    const deleteButtonHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id))
    }
    const completeButtonHandler = () => {
        setTodos(
            todos.map((el) => {
                if (el.id === todo.id) {
                    return {
                        ...el, completed: !el.completed
                    }
                }
                return el;
            })
        )
    }
    return (

        <div className="todo">
            <li className={`todo-item ${todo.completed ? 'completed' : ""}`}>{text}</li>
            <button onClick={completeButtonHandler} className="complete-btn"> <i className="fas fa-check"></i> </button>
            <button onClick={deleteButtonHandler} className="trash-btn"><i className="fas fa-trash"></i> </button>
        </div>
    )
}

export default Todo