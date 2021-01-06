import styled from 'styled-components';

export const Container = styled.header`
  background-color: #fff;
  box-shadow: 1px 5px 5px #f1f1f1;
  display: flex;
  align-items: center;

  height: 50px;
  padding: 5px;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  select {
    border: 1px #ccc solid;
    border-radius: 4px;
    flex: 1;
    padding: 0 10px;
    height: 30px;
    width: 250px;
    margin-left: 10px;
  }
`;

export const Menu = styled.div`
  a {
    color: #333;
    font-size: 12px;
    text-decoration: none;
    text-transform: uppercase;
    margin-left: 10px;
    padding: 5px;
    font-weight: 600;
    display: inline-block;

    &:hover {
      color: #f00;
    }
  }
`;