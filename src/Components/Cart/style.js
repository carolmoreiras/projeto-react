import styled from 'styled-components';

export const CartContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #FfffFF;
  width: 400px;
  overflow-y: scroll;
  ::-webkit-scrollbar {
    width: 12px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey; 
    border-radius: 10px;
  }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: navy; 
    border-radius: 10px;
  }
  
  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #800080; 
  }
`

export const CartHeader = styled.div`
  position: relative;
  display: flex;
  background-color: #ffb6f3; 
  justify-content: center;
  align-items:center;
  margin: 8px 0;
  width: 95%;
`

export const Title = styled.h2`
  font-family: 'Annie Use Your Telescope', cursive;
  font-size: 24px;
  color: #800080;
`

export const ItemsCart = styled.div`
  display: flex;
  justify-content: center;
  align-items:center;
  flex-direction: column;
  padding: 10px;
`

export const ArrowImg = styled.img`
  position: absolute;
  width: 32px;
  top: 0;
  left: 12px;
  cursor: pointer;
`

export const VazioImagem = styled.img`
  width: 200px;
`

export const ValorTotal = styled.span`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  font-family: 'Ubuntu', sans-serif;
  font-size: 28px;
  color: #C71585;
  p{ 
    font-family: 'Ubuntu', sans-serif;
    font-size: 20px;
    margin-right: 80px;
    font-weight: 700;
    color: #C71585;
  }
`
export const FinalButtonBack = styled.button`
  display: flex;
  background-color: #D3D3D3;
  width: 160px;
  height: 50px;
  border: none;
  justify-content: center;
  align-items: center;
  font-family: 'Dosis', sans-serif;
  font-weight: 700;
  font-size: 16px;
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
`

export const Checkout = styled.button`
  display: flex;
  color: white;
  font-family: 'Dosis', sans-serif;
  font-weight: 700;
  font-size: 16px;
  background-color: green;
  justify-content: center;
  gap: 4px;
  align-items: center;
  width: 160px;
  height: 50px;
  border: none;
  border-radius: 8px;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;
  img{
    width: 28px;
    height: 28px;
  }
  :disabled{
    background-color: gray;
  }
`

export const ContainerButtons = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 18px 20px;
  
`