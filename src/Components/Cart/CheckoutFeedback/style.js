import styled from 'styled-components';

export const BorderDetailsCart = styled.div`
  display: flex;
  border: solid gray 1px;
  border-radius: 16px;
  width: 360px;
  margin-bottom: 12px;
  position: relative;
`

export const ContainerDetails = styled.div`
  margin-left: 16px;
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  align-items: center;
  height: 140px;


  button{
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export const Text = styled.p`
  font-family: 'Ubuntu', sans-serif;
  font-size: 16px;
  color: navy;
  font-weight: 700;
  text-align: center;
`
