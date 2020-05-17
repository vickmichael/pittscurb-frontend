import React from 'react';
import styled from 'styled-components';
import { CircularProgress } from '@material-ui/core';

const Container = styled.div`
  display: flex;
  height: 100%;
  width: 100%;

  justify-content: center;
  align-items: center;
`;

export default ({ text }) => (
  <Container>
    <CircularProgress />
    <span>{text}</span>
  </Container>
);
