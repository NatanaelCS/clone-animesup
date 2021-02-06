import styled from 'styled-components';

export const HomeArea = styled.div`
  .links {
    font-family: 'Roboto', serif;


    nav {
      ul {
        display: flex;

        li {

          list-style: none;
          padding: 18px 17.5px;
          font-size: 14px;
          cursor: pointer;
          border-bottom: 1px solid #444;

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
  }
`;
