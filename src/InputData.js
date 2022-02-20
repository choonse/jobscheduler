import React from 'react';
import styled from 'styled-components';

const AddBtn = styled.button`
    width:50%;
    height:100px;
    background-color:#B2CCFF;
    border:none;
    font-size:40px;
    color:white;
    cursor:pointer;
`;

const ExecuteBtn = styled.button`
    width:50%;
    height:100px;
    background-color:#D1B2FF;
    border:none;
    font-size:40px;
    color:white;
    cursor:pointer;
`;

const SetRow = styled.div`
    display:flex;
    .titleSet{
        text-align:center;
        width:25%;
        border:1px solid gray;
        font-size:20px;
        background-color:lightgray;
        line-height:40px;
    }
`;

const SetData = styled.div`
    display:flex;
    .dataSet{
        text-align:center;
        width:25%;     
        font-size:20px;
        border-bottom:1px solid black;
        line-height:40px;
    }
`;

const Input = styled.input`
    border:none;
    border-bottom:1px solid lightgray;
    width:80%;
    line-height:24px;
    background-color:transparent;
    text-align:center;
    font-size:20px;
    ::placeholder,
    ::-webkit-input-placeholder {
    color: lightgray;
  }
`;

const InputData = ({task, add, changeField, execute}) => {

    let num = 0;    //job id 

    const onChange = (e) => {
        const field = (e.target.id).substring(0,3); 
        const id = (e.target.id).substr(3);
        const val = (e.target.value);
        changeField(field, id, val);    //set input data
    }

    return(
        <>
            <AddBtn onClick={()=>{add(num++)}}>Add</AddBtn>
            <ExecuteBtn onClick={execute}>Execute</ExecuteBtn>
            <SetRow>
                <div className="titleSet">job id</div>
                <div className="titleSet">duration(seconds)</div>
                <div className="titleSet">success</div>
                <div className="titleSet">dependent job ids</div>
            </SetRow>
            {task.map(list=>{
                return <SetData>
                <div className="dataSet" id={list}>{list}</div>
                <div className="dataSet" id={list+`sec`}><Input id={`sec`+list} onChange={onChange} placeholder='number'/></div>
                <div className="dataSet" id={list+`suc`}><Input id={`suc`+list} onChange={onChange} placeholder='boolean' /></div>
                <div className="dataSet" id={list+`dep`}><Input id={`dep`+list} onChange={onChange} placeholder='array'/></div>
                </SetData>
            })}
        </>
    )
}

export default InputData;