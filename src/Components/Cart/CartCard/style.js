import styled from 'styled-components';

export const BorderDetailsCart = styled.div`
  display: flex;
  border: solid gray 1px;
  border-radius: 16px;
  width: 360px;
  margin-bottom: 12px;
  position: relative;
`

export const ButtonDelete = styled.button`
  display:flex;
  justify-content: center; 
  align-items: center;
  flex-direction: column;
  border-style: none;
  position: absolute;
  right: 12px;
  top: 8px;
  img{      
    width:26px;
    height:28px;
    background-color: #FFFF;  
  }
`

export const ProductImg = styled.img`
  width: 96px;
  object-fit: cover;
  border-radius: 16px;
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
`

export const DetailsCart = styled.span`
  display:flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  font-family: 'Ubuntu', sans-serif;
  font-size: 16px;
  color: navy;
  font-weight: 700;
`

export const ContainerDetails = styled.div`
  margin-left: 16px;
  display:flex;
  flex-direction: column;
  justify-content: space-evenly;
  width: 100%;
  padding-right: 16px;
`

export const Quantidade = styled.div`
  display:flex;
  align-items: center;
  justify-content: space-between;
`

export const Text = styled.div`
  font-family: 'Ubuntu', sans-serif;
  font-size: 16px;
  color: navy;
  font-weight: 700;
`

export const ContainerQuantidade = styled.div`
  padding: 0.2rem;
  background-color: #DCDCDC;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 18px;
  font-weight: 700;
`

export const ButtonCart = styled.button`
  display:flex;
  justify-content: center;
  align-items: center;
  width: 30px;
  background-color: transparent;
  border-style: none;
  font-size: 20px;
`

export const QuantidadeCart = styled.span`
  background-color: #F5F5F5;
  width: 30px;
  text-align: center;
`