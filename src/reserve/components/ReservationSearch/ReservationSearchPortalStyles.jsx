import styled from 'styled-components';

export const SearchControls = styled.div`
    position: fixed;
    top: 1em;
    left: 1em;
    width: 30vw;

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
  `;
