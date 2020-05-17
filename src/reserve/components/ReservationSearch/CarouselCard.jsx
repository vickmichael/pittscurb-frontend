import React from 'react';

import styled from 'styled-components';
import Card from '@material-ui/core/Card';


// mocking the retrieval of this data

const getTimeWindow = () => {
  return "5:40pm - 6:00pm";
}

const startTime = "5:40pm"; // passed from redux store
const duration = 20;  // assumed duration

export default () => {

  const StyledCard = styled(Card)`
    display: flex;
    flex-direction: column;
    margin-top: 80vh;
    height: 18vh;
    width 60vw;
  `;

  const CardDiv = styled.div`
    margin-left: 20vw;
  `;

  const ContentDiv = styled.div`
    margin-top: 10px;  
    margin-left: 20px;
  `;

  return(
    <CardDiv>
      <StyledCard>
        
        <ContentDiv>
          <span>Available from</span>
          <h2>{getTimeWindow(startTime, duration)}</h2>
        </ContentDiv>
       
      </StyledCard>
    </CardDiv>
  );
}
