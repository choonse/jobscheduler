import React,{useState} from 'react';
import styled from 'styled-components';
import Process from './Process';

const Frame = styled.div`
    .all{
        display:flex;
    }
    
    .list1{
        width:56px;
    }
    .list2{
        width:170px;
        padding-left:7px;
    }
    .list3{
        width:68px;
        padding-left:7px;
    }
    .list4{
        width:170px;
        padding-left:7px;
    }
`;

const PrintResult = ({data, loadShow, setLoadShow, loading, setLoading}) => {

    let id=0;
    let loadcount=0;    
    
    const load = ()=>{          //set loading ......
        setTimeout(()=>{
            setLoading(prev=>prev+'...');
             if(loadcount<2){
                 load();
                 loadcount++;
             }
        },1000);   
    }
    
    if(loadShow){        
        load();
        setLoadShow(false);
    }

    return(
        <>
        <div># Click Add button and fill the input fields. </div>
        <div># Execute button will print an output.</div>
        <div># Result will be shown at this page.</div>

        <div>>></div>
        <br/>
        <div>job id | duration (seconds) | success | dependent job ids</div>
        <div>{!!data&&data.map(list=>{
            return <Frame><div className="all"><div className="list1">{id++}</div>|<div className="list2">{list.sec}</div>|<div className="list3">{list.suc}</div>|<div className="list4">[{list.dep}]</div></div></Frame>
        })}
        </div>
        <br/>
        <div>{loading}</div>      
        {loading.length>8?
            <Process process={data} />
        :''
        } 
        </>
    )
}

export default PrintResult;