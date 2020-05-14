import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 0px;
  left: 0px;
  background-color: #ffffff00;
  width: 100%;
  height: 5rem;
  padding: 0 4rem;
  z-index: 50;

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