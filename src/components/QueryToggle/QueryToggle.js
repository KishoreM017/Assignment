import React from 'react';
import style from '../QueryToggle/QueryToggle.css'

const QueryToggle = ({ sqlData, selectedQuery, handleQueryChange  }) => {

    return (
        <div className="toggle-container">
            <select value={selectedQuery} onChange={(e) => handleQueryChange(e.target.value)}>
                <option key="select" selected value={""}>select query</option>
                {
                    sqlData?.map(el =>{
                        return <option key={el?.query} value={el?.query}>{el?.query}</option>
                    })
                }
            </select>
        </div>
    )
}

export default QueryToggle;
