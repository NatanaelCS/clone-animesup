import styled from 'styled-components';

export const LinksContainer = styled.div`
  font-family: 'Roboto', serif;

  nav {
    ul {
      display: flex;

      li {

        list-style: none;
        padding: 18px 17.8px;
        font-size: 14px;
        cursor: pointer;
        border-bottom: 1px solid rgba(37,37,37,.7);

        &:hover {
          border-bottom: 1px solid #f00;

          a {
            color: #f00;
          }
        }

        a {
          text-decoration: none;
          color: #777;
        }
      }
    }
  }
`;
