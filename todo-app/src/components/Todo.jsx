import React from "react"

const Todo = ( { text, isRushed, onRush, onDelete } ) => {

    const completeStyle = {
        backgroundColor: "#339989"
    }

    return (
        <div className="todo-item" style={isRushed ? completeStyle : null}>
            <span>{text} {isRushed ? "- RUSH" : ""}</span>
            <div className="btn-group">
                {!isRushed && <button title="Rush" className="custom-btn rush" onClick={onRush}>O</button>}
                <button title="Delete" className="custom-btn delete" onClick={onDelete}>X</button>
            </div>
        </div>
    )
}

export default Todo;