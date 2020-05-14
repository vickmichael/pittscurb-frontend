import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {  Button, Chip }  from '@material-ui/core';
import styled from 'styled-components';
import { mdiClose } from '@mdi/js';
import Icon from '@mdi/react';

const StyledPanel = styled.div`
  width: 33vw;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  padding: 2rem;
  h2 {
    margin: 0;
    line-height: 40px;
    font-family: Muli;
    font-style: normal;
    font-weight: bold;
    font-size 30px;
    color: #4D4D4D;
  }
`;

const StyledCard = styled.div`
  padding: 1rem;
  display: flex;
  flexflow: column;
  align-items: flex-start;
  h3 {
    font-family: Muli;
    font-style: normal;
    font-weight: bold;
    font-size 18px;
    color: #4D4D4D;
  }
`;
// purple: #8D1EF8;
export default () => {
  const dispatch = useDispatch();
  const handleDelete = (boundary) => {
    dispatch({
      type: 'TOGGLE_BOUNDARIES', value: boundary
    })
  };
  const boundaries = useSelector(state => state.boundaries)

  return (
    <StyledPanel>
      <h2>Create zone</h2>
      { boundaries.map(boundary => ( 
        <Chip
          size="small"
          key={boundary}
          label={boundary}
          onDelete={() => handleDelete(boundary)}
          deleteIcon={<Icon size="1rem" path={mdiClose} />}>
        </Chip> 
      ))}
   
      <StyledCard>
        <h3>Editors</h3>
      </StyledCard>
      <StyledCard>
        <h3>Viewers</h3>

      </StyledCard>
      <Button>Cancel</Button>
      <Button>Create Zone</Button>
    </StyledPanel>
  )
}