import React, {useState} from "react"

const Form = ( { addTodo, totalTodos } ) => {
    
    const [ newText, setNewText ] = useState('')
    
    const handleInputChange = (event) => setNewText(event.target.value)

    const handleSubmit = (event) => {
        event.preventDefault();
        if(!newText) return
        const newTodo = {
            id: totalTodos,
            text: newText,
            isRushed: false,
            isDeleted: false
        }
        addTodo(newTodo)
        setNewText('')
      }
    return (
        <>
            <form onSubmit={handleSubmit} className="custom-form">
                <input 
                    type="text"
                    className="textbox"
                    value={newText}
                    placeholder="Add Todo..."
                    onChange={e => handleInputChange(e)} 
                />     
                <button className="custom-btn submit">Submit</button>
            </form>
        </>
        
    )
}

export default Form