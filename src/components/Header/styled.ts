import styled from 'styled-components';

export const HeaderArea = styled.header`
  height: 70px;
  width: 100%;
  background-color: rgba(15, 15, 15, .99);
  display: flex;
  align-items: center;
  justify-content:center;
`;

export const Container = styled.div`
  max-width: 1200px;
  width:100%;
  height: 100%;
  background-color: rgba(15, 15, 15, .99);
  display: flex;
  align-items: center;
  color: #fff;
  font-size: 15px;
`;

export const Logo = styled.div`
  img {
    height: 32px;
    width: auto;
    margin-left: 10px;
  }
`;


export const ContentHeader = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;

  .nav-bar {
    display: flex;
    align-items: center;

    ul {
      font-family: 'Roboto';
      display: flex;

      li {
        list-style: none;
        padding: 0 19px;

        a {
          display: flex;
          text-decoration:none;
          color: #fff;

          .arrow {
            display: flex;
            align-items:center;
            justify-content:center;
            background-color: red;
            border-radius: 4px;
            margin-left: 5px;
            height: 16px;
            width:13px;
          }
          .ped {
            width: 15px;
            height: 15px;
          }
        }
      }
    }
  }

  .search {
    display: flex;
    align-items: center;

    input {
      width: 200px;
      height: 40px;
      border:0;
      border-radius: 5px;
      padding: 0 10px;
      background-color: #444;

      color: #fff;
      outline: 0;
    }
    .lupa {
      margin-left: -29px;
    }
    .profile {
      display: flex;
      align-items: center;
      justify-content:center;
      height: 35px;
      border-left: 2px solid #444;
      margin-left: 33px;
      padding: 0 17px;
    }
  }

`;
