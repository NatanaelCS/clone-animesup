import styled from 'styled-components';

export const FooterArea = styled.footer`
  color: #fff;
  font-family: 'Roboto', serif;

  .info {
    display: flex;
    padding: 50px 110px;

    .info--left {
      display: flex;
    }

    .info--left .contents {
      display: flex;
      align-items: center;
      flex-direction:column;

      .h1 {
        margin-bottom: 10px;
      }
    }

    .li {
      display: flex;
      justify-content: center;

      li {
        list-style: none;
        background-color: #000;
        margin: 3px;
        padding: 5px 15px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 6px;
        text-align: center;

        a {
          text-decoration: none;
          color: #f00;
          font-size: 13px;
        }
      }
    }

    .info--right {
      width: 300px;
      margin-left: 250px;

      p {
      font-size: 14px;
      
      }
    }
    
  }

  .copy {
    border-top: 1px solid #333;
    margin: 0 35px;
    padding: 40px 0;
    font-size: 12px;
    display: flex;
    justify-content: space-between;
    align-items:content;

    .button {
      background-color: rgba(255,255,255,.2);
      border-radius: 6px;
      display: flex;
      justify-content:center;
      align-items:center;
      padding: 8px 12px;
    }
  }
`;
