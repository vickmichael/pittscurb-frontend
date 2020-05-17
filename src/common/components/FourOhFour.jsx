import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import { mdiArrowLeft } from '@mdi/js';
import Icon from '@mdi/react';

import Logo from './Logo';

const StyledLogo = styled(Logo)`
  height: 2rem;
`;

const Container = styled.div`
  position: absolute;
  top: 0rem;
  z-index: -1;
  width: 100vw;
  height: 100vh;
  background-image: linear-gradient(to bottom, rgba(255,255,255,0), rgba(255,255,255,0), rgba(255,255,255,.2), rgba(255,255,255,1)), url('404.svg');
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center bottom;
  padding: 2rem 2rem;

  color: #4D4D4D;

  display: flex;
  flex-flow: column nowrap;
  justify-content: space-between;
  align-items: stretch;
`;

const BigTitle = styled.h1`
  font-weight: bolder;
  font-size: 2.5rem;
  margin-bottom: 0rem;
  margin-top: 2rem;
`;

const Message = styled.p`
  margin: 0;
`;

export default () => (
  <Container>
    <div>
      <StyledLogo />
      <BigTitle>Page not found</BigTitle>
      <Message>Looks like someone took our spot...</Message>
    </div>
    <Button
      variant="contained"
      color="primary"
      component={Link}
      to="/"
      startIcon={<Icon size="1rem" path={mdiArrowLeft} />}
    >
      Back to reservations
    </Button>
  </Container>
);
