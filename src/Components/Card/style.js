import styled from 'styled-components';

export const ContainerCard = styled.div`
  display: flex;
  background-color: #ffb6f3; 
  flex-direction: column;
  align-items:center;
  width: 240px;
  min-height: 300px;
  border-radius: 20px;
`

export const Titles = styled.h2`
  font-family: 'Righteous', cursive;
  font-size: 20px;
  color: white;
`
export const Imgs = styled.img`
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  width: 100%;
  height: 240px;

`

export const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 180px;
  padding: 4px;
  margin: 8px 0;
  border-radius: 20px;
  border: none;

`

export const ButtonIcon = styled.img`

  width: 24px;
  height: 24px;
`