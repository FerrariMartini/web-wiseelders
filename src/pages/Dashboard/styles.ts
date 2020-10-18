import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  thead {
    font-size: 16px;
    font-weight: 500;
    background-color: #ff9000;
    text-align: center;
  }
  th {
    padding: 10px;
  }

  td {
    text-align: center;
    padding: 10px;
  }
`;

export const TableBox = styled.div`
  background: #fff;
  a {
    font-size: 18px;
    color: #ff9000;
    display: block;
    text-decoration: none;
    margin: 10px;
    margin-top: 40px;
    transition: color 0.2s;
  }
  a:hover {
    color: #666360;
  }
`;
