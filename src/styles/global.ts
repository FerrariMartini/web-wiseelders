import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  outline: 0;
  box-sizing: border-box;
}

body: {
  background: #e6e3e3,
}

body, input, button {
  font-size: 16px
}

h1{
  margin: 10px
}

input, select {
    margin: 10px;
    padding: 10px;
    background: transparent;
    flex: 1;
    border: 1px solid #ff9000;
    border-radius: 5px;
    &::placeholder {
      color: #666360;
    }
  }

button{
  background-color: #ff9000;
  height: 30px;
  border-radius: 10px;
  border: 0;
  padding: 0 10px;
  color: #312e38;
  width: auto;
  font-weight: 600;
  margin: 10px;
  transition: background-color 0.2s;

  :hover {
    background-color: #cc7300;
  }
}
`;
