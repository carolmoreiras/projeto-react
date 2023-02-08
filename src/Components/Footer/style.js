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
  font-size: 22px;
  text-shadow: black 0.1em 0.1em 0.2em;
  display: flex;
  justify-content: center;
  align-items: center;
  
`

export const ImgContact = styled.img`
  width: 100px;
`
export const ImgConect = styled.img`
  width: 68px;
`
export const LinksRedes = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 20px;
  padding: 10px;
  line-height: 30px;

  a {
  color: white;
  text-shadow: black 0.1em 0.1em 0.2em;
  text-decoration: none;
  }

  a:hover {
  color: navy;
  }
`