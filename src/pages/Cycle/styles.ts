import styled from "styled-components";

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const FormBox = styled.div`
  width: 50%;
  height: 50%;
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
