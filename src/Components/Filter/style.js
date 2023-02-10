import styled from 'styled-components';

export const FilterContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FfffFF;
  width: 400px;
  color: navy;
  font-size: 20px;
  font-family: 'Ubuntu', sans-serif;
  font-weight: 700;
`

export const FilterTitle = styled.h2`
  font-family: 'Annie Use Your Telescope', cursive;
  display: flex;
  background-color: #ffb6f3; 
  justify-content: center;
  align-items:center;
  font-size: 24px;
  color: #800080;
  margin: 8px 0;
  width: 200px;
`
export const OrderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;
  padding: 10px;
  /* border-radius:10px;
  width: 360px; */

  input{

    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  }

  p{
    margin-bottom: 12px;
    font-size: 20px;
    text-decoration: underline;
  }

  span{
    color: purple;
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
  margin-top: 20px;
  width: 120px;
  padding: 4px;
  border: none; 
  background-color: #D3D3D3;
  justify-content: center;
  align-items: center;
  font-family: 'Dosis', sans-serif;
  font-weight: 700;
  font-size: 16px;
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`

export const ArrowImg = styled.img`
  position: absolute;
  width: 32px;
  top: 0;
  left: 12px;
  cursor: pointer;
`

export const FiltertHeader = styled.div`
  position: relative;
  display: flex;
  background-color: #ffb6f3; 
  justify-content: center;
  align-items:center;
  margin: 8px 0;
  width: 95%;
`