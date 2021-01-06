import styled from 'styled-components'

export const Form = styled.form`
  margin: 50px auto 0;
  width: 320px;

  label {
    display: block;
    margin-bottom: 5px;
    font-weight: 600;
    font-size: 12px;
    text-transform: uppercase;
  }

  input {
    border: 1px #ccc solid;
    border-radius: 4px;
    display: block;
    padding: 10px;
    height: 40px;
    width: 100%;
    margin-bottom: 20px;
  }

  button {
    border: none;
    border-radius: 4px;
    display: block;
    padding: 15px;
    width: 100%;
    cursor: pointer;
    text-transform: uppercase;
    &:hover {
      background-color: #333;
      color: #fff;
    }
  }
`;