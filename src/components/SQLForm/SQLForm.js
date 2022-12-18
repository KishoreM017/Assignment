import React from 'react';
import style from './SQLForm.css';

const SQLForm = ({ textAreaRef, handleFromSubmit }) => {

    return (
        <div className="sql-form-container">
            <form className="form-element" onSubmit={handleFromSubmit}>
                <textarea className="text-area" placeholder="Enter query..." ref={textAreaRef} required/>
                <button className="submit-button" type="submit">Run Query</button>
            </form>
        </div>
    )
}

export default SQLForm;
