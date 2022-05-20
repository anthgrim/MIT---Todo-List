import React from "react"

const Form = ( { onInputChange, targetValue, onSubmitForm } ) => {
    return (
        <>
            <form onSubmit={onSubmitForm} className="custom-form">
                <input 
                    type="text"
                    className="textbox"
                    name={targetValue}
                    value={targetValue.value}
                    placeholder="Add Todo..."
                    onChange={onInputChange} 
                />     
                <button className="custom-btn submit">Submit</button>
            </form>
        </>
    )
}

export default Form