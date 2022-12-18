import React, { useRef, useState } from 'react';
import './App.css';
import SQLForm from './components/SQLForm/SQLForm';
import TableData from '../src/components/TableData/TableData';
import QueryToggle from '../src/components/QueryToggle/QueryToggle';
import { sqlData } from '../src/utils/utils';

const App = props => {

  const [queryData, setQueryData] = useState(null);
  const textAreaRef = useRef(null);

  const getSelectedQuery = (query) =>{
     //input query does not match then taking default zeroth index table data
    let selectedQuery = sqlData[0];
    sqlData.forEach(el => {
      if(el.query.toLowerCase() === query?.trim().toLowerCase()){
        selectedQuery = el;
      }
    });
    return selectedQuery;
  }

  const handleFromSubmit = (e) =>{
    e.preventDefault();
    let selectedQuery = getSelectedQuery(textAreaRef?.current?.value?.trim().toLowerCase());
    if(selectedQuery){
      setQueryData(selectedQuery);
    }else{
      setQueryData(sqlData[0]);
    }
  }

  const handleQueryChange = (query) =>{
    if(query){
      let selectedQuery = getSelectedQuery(query?.trim().toLowerCase());
      if(selectedQuery){
        setQueryData(selectedQuery);
      }else{
        setQueryData(sqlData[0]);
      }
    }else{
      setQueryData(null)
    }
  }

  return (
      <div className="container">
            <h1>Atlan Assignment</h1>
           <SQLForm 
           textAreaRef={textAreaRef}
           handleFromSubmit={handleFromSubmit}
           />
          <div className="divider"> OR</div>
           <QueryToggle 
           sqlData={sqlData}
           handleQueryChange={handleQueryChange}
           />
           <TableData tableData={queryData?.tableData}/>
      </div>
  );
}


export default App;
