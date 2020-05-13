import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: #ffffff40;
  width: 100%;
  height: 5rem;
  box-shadow: 0rem .5rem 1rem rgba(0,0,0,0.25);
  padding: 0 1.5rem;

  display: flex;
  flex-direction: row nowrap;
  align-items: center;
  justify-content: space-between;
`;

export const LogoContainer = styled.div`
  width: 10.5rem;

  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
  font-size: 1.5rem;
  font-weight: 800;
`