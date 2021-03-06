import styled from 'styled-components';

export const OptionsCard = styled.div`
  margin-right:20px;
`;

export const PlayImage = styled.div`
  border-radius: 5px;
  width: inherit;
  margin-top: 20px;
  margin-bottom:15px;
`;

export const CardImage = styled.div`
  width: inherit;
  height: inherit;
  border-radius: 8px;
  background-position:center;
  background-repeat: no-repeat;
  background-size:cover;
`;

export const CardHover = styled.div`
  width: inherit;
  height:inherit;
  border-radius: 5px;

  display: flex;
  justify-content:center;
  align-items:center;

  transition: all ease .2s;

  .play {
    display:none;
  }

  :hover {
    background-color: rgba(13, 11, 11, .8);
    z-index:999;

    .play {
    display:block;
  }
  }
`;

export const CardTitle = styled.div`
  width: 100%;
  text-align:center;
`;


