import styled from 'styled-components';

export const ListCard = styled.ul`
  width: 100%;
`;

export const Container = styled.li`
  background-color: #fff;
  border-radius: 5px;
  display: flex;
  padding: 20px;
  margin-bottom: 10px;

  &:hover {
    box-shadow: 2px 5px 5px #ccc;
  }

  img {
    display: block;
    max-width: 220px;
    height: auto;
    width: 100%;
    margin-right: 20px;
  }

  h1 {
    font-weight: bold;
    font-size: 28px;
    margin-bottom: 30px;
  }

  h3 {
    font-weight: bold;
    font-size: 22px;
  }

  h4 {
    font-weight: bold;
    font-size: 14px;
    margin-top: 10px;
  }
`;