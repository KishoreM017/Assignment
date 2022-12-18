import React from 'react';
import styles from './TableData.css'

const TableData = ({ tableData }) => {
    return (
        <div className="table-container">
            <table>
                <tr>
                    {
                    tableData?.headers?.map(el=>{
                            return(
                            <th>{el}</th>
                            )
                        })
                    }
                </tr>
                {
                    tableData?.data?.map(el=>{
                        return(
                            <tr>
                                <td>{el?.id}</td>
                                <td>{el?.customerName}</td>
                                <td>{el?.Profession}</td>
                            </tr>
                        )
                    })
                }
            </table>
        </div>
    )
}

export default TableData;
