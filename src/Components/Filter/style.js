import styled from 'styled-components';

export const FilterContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
background-color: #F8F8FF;
width: 600px;

`

export const FilterTitle = styled.h2`
  font-family: 'Annie Use Your Telescope', cursive;
  display: flex;
  background-color: #ffb6f3; 
  justify-content: center;
  align-items:center;
  font-size: 24px;
  color: #800080;
  /* border-radius: 20px; */
  margin: 8px 0;
  width: 200px;
`
export const OrderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;
  padding: 10px;

  p{
    margin-bottom: 8px;
    font-size: 20px;
  }
`
export const MaiorMenorValor = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px;

  input {
  height: 10px;
  width: 10px;
  }

label{
  margin: 0.2em;
}
`

export const FilterButton = styled.button`
  background-color: #D3D3D3;
  margin: 8px;
  width: 120px;
  padding: 4px;
  border-radius: 20px;
  border: none;
`

export const ArrowImg = styled.img`
  width: 24px;
`