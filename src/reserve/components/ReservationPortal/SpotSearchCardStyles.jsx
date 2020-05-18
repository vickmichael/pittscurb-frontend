import styled from 'styled-components';

export const Wrapper = styled.div`
  background: #FFFFFF;
  border-top: 6px solid #2830EF;
  box-shadow: 0px 6px 16px rgba(0, 0, 0, 0.15);
  
  display: flex;
  flex: 0 0 438px;
  flex-direction: column;
  max-width: 438px;
  
  & > .top-section {
    padding: 2.75rem 2rem 1.5rem 2rem;
    width: 100%;
    
    > h2 {
      font-size: 2rem;
      
      > span {
        color: white;
        text-shadow:
          -1px -1px 0 #000,  
          1px -1px 0 #000,
          -1px 1px 0 #000,
          1px 1px 0 #000;
      }
    }
    
    h4 {
    color: black;
    }
  } 
  
  & form .dropdown-wrapper {
    position: relative;
    
    > img {
      position: absolute;
      left: .75rem;
      top: 17px;
    }
  }
  
  & form input,select {
    height: 3.125rem;
    margin-bottom: .5rem;
    padding: .875rem .75rem;
    width: 100%;
    
    background: #FFFFFF;
    border: 1px solid #BFBFBF;
    box-sizing: border-box;
    border-radius: 4px;
    font-size: 1rem;
  }
  
  & form select {
    appearance: none;
    padding-left: 2.5rem;
    
    color: #2B2B2B;
  }
  
  @media (max-width: 800px) {
    border-top: none;
    max-width: 100%;
    width: 100%;
  }
`;

export const SubmitButton = styled.button`
  height: 50px;
  width: 100%;
  
  background: #8D1EF8;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
`;

export const ExampleWrapper = styled.div`
  background: #FBFAFB;
  color: #7C7C7C;
  font-size: .875rem;
  font-style: italic;
  line-height: 1.5rem;
  text-align: left;
  
  padding: 2rem;
  width: 100%;
  
  & .example-item > span {
    font-weight: 600;
  }
`;

export const ExampleHeader = styled.div`
  font-weight: bold;
`;

export const Disclaimer  = styled.p`
  padding: 0 1.5rem;
`;
