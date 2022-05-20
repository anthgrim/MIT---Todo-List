import React from "react"

const Form = ( { onInputChange, targetValue, onSubmitForm } ) => {
    return (
        <>
            <form onSubmit={onSubmitForm}>
                <input 
                    type="text"
                    className="textbox"
                    name={targetValue}
                    value={targetValue.value}
                    placeholder="Add Todo..."
                    onChange={onInputChange} 
                />
                {/* <input 
                    type="checkbox" 
                    className="checkbox"
                    name={isRushed}
                    checked={isRushed}
                /> */}
                <button className="custom-btn submit">Submit</button>
            </form>
        </>
    )
}

export default Form