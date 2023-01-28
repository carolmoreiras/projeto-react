import styled from 'styled-components';
import WallpaperFooter from "../../images/wallpaper-galaxia.jpg"


export const FooterContainer = styled.footer`
  display: flex;
  width: 100%;
  height: 200px;
  background-image: url(${WallpaperFooter});
  justify-content: space-around;
  padding: 4px 40px;
  align-items: center;
`

export const ContainerContact = styled.div`
  display: flex;
  background-color: #ffffff53;
  padding: 16px;
  border-radius: 16px;
`
export const Titulo = styled.p`
  font-family: 'Kavoon', cursive;
  color: #ffb6f3;
  font-size: 20px;
`

export const ImgContact = styled.img`
  width: 100px;
`
export const ImgConect = styled.img`
  width: 68px;
`

export const Redes = styled.p`
  width: 68px;
`

export const Adress = styled.p`
  color: white;
`