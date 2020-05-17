import styled from 'styled-components';
import colors from '../../../common/constants/colors';


export const Container  = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: scroll;
`;

export const InfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  text-align: left;
  padding: 1.25rem;
`;

export const Text = styled.p`
  margin: 0;
  font-size: 1.125rem;
`;

export const Uppercase = styled(Text)`
  text-transform: uppercase;
  font-weight: 800;
  font-size: 1.25rem;
`;

export const Header = styled(Text)`
  color: ${colors.black}
  font-size: 1.25rem;
  font-weight: bold;
  margin-bottom: 1.125rem;
`;

export const SectionHeader = styled(Header)`
  font-size: 1rem;
`;

export const Description = styled(Text)`
  color: ${colors.gray};
  font-size: 1rem;
  margin-bottom: 2.25rem;
`;

export const Small = styled(Description)`
  font-size: 0.75rem;
  color: ${colors.grayLight};
  padding-left: 1rem;
`;

export const BigNumber = styled.h1`
  font-weight: 900;
  font-size: 5rem;
  line-height: 3rem;
  margin: 1.25rem 0;
`;

export const Expired = styled(BigNumber)`
  font-size: 3rem;
`;

export const Bullets = styled.ul`
  color: ${colors.grayDark};
  margin-top: -1rem;
  li {
    margin-bottom: 1rem;
    a {
      color: ${colors.grayDark};
    }
  }
`;

export const MapButton = styled.button`
  width: 2.875rem;
  height: 2.875rem;
  border-radius: 5rem;
  background-color: ${colors.primary};
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.07);
  color: ${colors.white};
`;

export const ButtonRow = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: -1rem;
  margin-bottom: 1rem;
  padding: 0 1rem;
`;

export const LeftButtonRow = styled.div`
  display: flex;
  width: 7rem;
  justify-content: space-between;
`;


export const MiniMap = styled.div`
  width: 100%;
  height: 18.875rem;
  border-radius: 0.25rem;
  background-image: url('sample_spot.png');
  background-size: cover;
  background-position: center;
`;

export const BarButton = styled.button`
  width: 100%;
  border: 1px solid ${colors.primary};
  color: ${colors.primary};
  background-color: transparent;
  border-radius: 0.25rem;
  margin: 0.5rem 0;
  padding: 0.75rem;
  font-size: 1rem;
`;
