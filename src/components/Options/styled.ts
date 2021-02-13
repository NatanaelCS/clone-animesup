import styled from 'styled-components';

export const Container = styled.div`
  box-sizing: border-box;
  max-width: 1200px;
  margin: 40px 50px 0px 50px;
  padding-bottom: 20px;
  border-bottom: ${props => props.border ? '1px solid rgba(37,37,37,.7)' : '0'} ;


  :last-child {
    border-bottom: 0;
  }
`;

export const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-left: 3.5px solid #f00;
  padding-left: 10px;
`;

export const Title = styled.div`
  font-size: 21px;
`;

export const ContentViews = styled.div`
  display: flex;
`;

export const ViewAll = styled.div`

`;

export const ButtonSControll = styled.div`

`;

export const ContentBody = styled.div`

`;

export const OptionsCard = styled.div`
  width: 195px;

`;

export const PlayImage = styled.div`
  border-radius: 5px;
  width: 195px;
  height: 273px;
  margin-top: 20px;
  margin-bottom:15px;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 8px;
`;

export const CardTitle = styled.div`
  width: 100%;
  text-align:center;
`;
