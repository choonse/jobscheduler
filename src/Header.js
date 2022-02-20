import React from 'react';
import styled from 'styled-components';

const Heads = styled.div`

  height:150px;
  background-color:lightblue;
  div{
    font-size:5rem;
    text-align:center;
    line-height:130px;
    font-weight:550;
  }
`
const Header = () => {
    return(
        <Heads>
          <div>Job Scheduler</div>
        </Heads>
    )
}

export default Header;