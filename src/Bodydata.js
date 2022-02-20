import React, {useEffect, useState} from 'react';
import styled from 'styled-components';
import InputData from './InputData';
import PrintResult from './PrintResult';

const Page = styled.div`
    display:flex;
    justify-content:center;
    margin-top:5rem;
`;

const BodyDiv = styled.div`
    height:600px;
    width:700px;
    background-color:#F6F6F6;
    margin-right:1rem;
`;

const ResultDiv = styled.div`
    height:600px;
    width:700px;
    background-color:black;
    color:white;
    margin-left:1rem;
    padding-left:5px;
    padding-right:5px;
    font-size:20px;
`;

const Bodydata = () => {

    const [jobId, setJobId] = useState(0);
    const [task, setTask] = useState([]);
    const [data, setData] = useState();
    const [show, setShow]=useState();
    const [loadShow, setLoadShow] = useState(false);
    const [loading, setLoading] = useState('');
    const [printing, setPrinting] = useState('');
    let array = [];

    const add = () => {     
        setJobId(id=>id+1)
        setTask(task=>[...task,jobId])
        
        const dat = {
            sec:'',         //second
            suc:'',         //success
            dep:'',         //dependency
        }
        setData({...data, [jobId]:dat})    
        setLoading('');
    }

    const changeField = (field, id, val) => {
        const dat = {
            ...data[id],
            [field]:val
        }
        setData({...data, [id]:dat});
    }

    const execute=()=>{

        setLoading('');       
        let cnt = 0;
    
        while(data[cnt]){
            array = [...array, data[cnt]];
            cnt++;
        }
        setShow(array);
        setLoadShow(true);
    }

    return(
        <Page>
        <BodyDiv><InputData task={task} add={add} changeField={changeField} execute={execute} /></BodyDiv>
        <ResultDiv><PrintResult data={show} loadShow={loadShow} setLoadShow={setLoadShow} loading={loading} setLoading={setLoading} /></ResultDiv>
        </Page>
    )
}

export default Bodydata;