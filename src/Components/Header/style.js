import styled from 'styled-components';
import WallpaperHeader from "../../images/wallpaper-galaxia.jpg"

export const HeaderContainer = styled.header`
  display: flex;
  width: 100%;
  background-image: url(${WallpaperHeader});
  justify-content: space-between;
  padding: 4px 40px;
  align-items: center;
`

export const InputContainer = styled.input`
  height: 42px;
  border-radius: 20px;
  border-style: none;
  padding: 0 16px;
  width: 500px;
`

export const Button = styled.button`
  display: flex;
  position: absolute;
  width: 48px;
  height: 36px;
  right: 12px;
  top: 3px;
  background-color: white;
  border: none;
  border-radius: 50%;

`

export const Image = styled.img`
  width: 40px;
  height: 40px;
`

export const SearchContainer = styled.div`
  position: relative;

`
export const CartImage = styled.img`
  width: 60px;
`

export const IconContainer = styled.div`
color: white;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: 100px;
height: 60px;
`

export const Logo = styled.img`
width: 200px;
`
export const Filter = styled.img`
width: 60px;
`
export const MenuContainers = styled.div`
display: flex;
`
