import styled from 'styled-components';

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
`;

export const Overlay = styled.div`
  background: url('Reservation-Portal_Hero-Image.png');
  height: 592px;
  padding: 10rem 7rem;
  
  & > h2 {
    font-size: 3rem;
    font-weight: 800;
    margin-bottom: 3rem;
    margin-top: 0;
    width: 530px;
  }
  
  & > h4 {
    font-size: 1.125rem;
    font-weight: normal;
    margin: 0;
    width: 400px;
  }
  
  @media (max-width: 800px) {
    display: none;
  }
`;

export const SearchSection = styled.div`
  align-items: center;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: -9rem;
  max-width: 85rem;
  padding: 0 114px;
  
  & > div {
    align-items: center;
    display: flex;
    flex-direction: column;
    
    color: #8D1EF8;
    text-align: center;
    
    > img {
      height: 3.375rem;
      margin-bottom: 1.5rem;
    }
  }
  
  @media (max-width: 800px) {
    flex-direction: column;
    margin: 0;
    padding: 0;
    
    & > .icon-container {
      display: none;
    }
  }
`;

export const SalesPoints = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-top: 11rem;
  
  & > h2 {
    margin-bottom: 2.75rem;
    margin-top: 0;
    max-width: 40rem;
    
    font-size: 1.75rem;
    font-weight: 600;
    line-height: 1.5;
    text-align: center;
  }
  
  & > .sales-points-list {
    align-items: flex-end;
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    justify-content: center;
    align-items: baseline;
    max-width: 90rem;
    width: 100%;
    
    > .sales-point-item {
      align-items: center;
      display: flex;
      flex-direction: column;
      margin: 2.75rem 3rem 0rem 3rem;
      text-align: center;
      
      > img {
        height: 7.5rem;
        margin-bottom: 2rem;
      }
      
      > div {
        max-width: 19rem;
        
        font-size: 1.25rem;
        line-height: 1.5;
      }
    }
  }
`;

export const Footer = styled.div`
  height: 20rem;
  background-color: #F8F6FA;
  align-items: center;
  justify-content: center;
  display: flex;
  flex-direction: column;
  font-family: Muli;

  .pittsburgh-img {
    width: 3rem;
    height: 3rem;
    margin-right: 1rem;
  }

  .supported {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: #4D4D4D;
    margin-bottom: 4rem;
    font-size: 1.5rem;
  }

  .copyright {
    color: #848484;
  }
`;

export const Feedback = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  margin-bottom: 8rem;
  margin-top: 9rem;
  width: 100%;
  
  & > .feedback-content {
    align-items: center;
    display:flex;
    flex-flow: row wrap;
    justify-content: center;
    
    color: #4D4D4D;
    font-size: 1.25rem;

    > .questions {
      margin-right: 1rem;
    }
    
    > .feedback-email {
      margin-left: .75rem;
      margin-top: 1rem;
      padding: .5rem 1.75rem;
    
      background: #FFFFFF;
      border-radius: 4rem;
      box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.13);
      font-size: 1rem;
    }

    .feedback-email > a {
      color: #8D1EF8;
    }
  }
`;
