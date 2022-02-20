import React,{useState} from 'react';
import { useEffect } from 'react';

const Process = ({process}) => {

    let node = process;
    const queue = [];   // complete jobs
    const fail = [];    // failed jobs
    const skip = [];    // skipped jobs
    const check = [];   // task on work
    const sequence = [];  //jobs need to be done
    let textall = [];     // processing text
    const result = [];    // result text
    const checkError = [];  //cyclic check

    let noncyclic = true;

    const printResult = (text) => {    
        textall.push(text)
    }

    if(node){
        for(let i=0;i<node.length;i++){
            sequence.push(i);
        }
    }

    const seqlength = sequence.length;
    const checklength = check.length;

    if(sequence.length!==0){
        check.push(sequence.shift());
    }

    const showResult = () => {
        result.push(queue);
        result.push(fail);
        result.push(skip);
    }

    while(check.length>0&&noncyclic){
        let cnt = 0;
        if(sequence.length===0&&check.length===checkError.length){
            noncyclic=false;
        }

        const num = check.shift();

        if(sequence.length!==0){
            check.push(sequence.shift());
        }
        
        if(!!node&&node[num].suc==='true'){
            if(!!node&&node[num].dep!==''){
                let flag = true;
                (node[num].dep).split(' ').forEach(list=>{        
                    if(fail.includes(Number(list))){
                        skip.push(num);
                        printResult(num+' job is skipped.');
                        flag = false;
                        return;
                    }
                    if(!(queue.includes(Number(list)))){
                        flag = false;
                        check.push(num);
                        checkError.push(num);
                        return;
                    }
                })
                    if(flag){
                        printResult(num+' job is done successfully.')
                        queue.push(num)
                    };
            }else{
                printResult(num+' job is done successfully.')
                queue.push(num);
            }    
        }else{
            printResult(num+' job has failed.');
            fail.push(num);
        }
    }

    showResult();
    
    return(
        <>{noncyclic===false?
        <div>cyclic dependencies: true</div>    
            :
        <>
        {!!textall&&textall.map(list=>{
            return <div>{list}</div>
        })}
        <br/>
        {!!result&&result.map((list,idx)=>{
            return <div> {idx===0?'completed jobs: [ '+list+' ]':''}
                         {idx===1?'failed jobs: [ '+list+' ]':''}
                         {idx===2?'skipped jobs: [ '+list+' ]':''}</div>
        })}
        </>
        }
        </>
    )
}

export default Process;