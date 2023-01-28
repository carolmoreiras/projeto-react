import {FooterContainer, ContainerContact, ImgContact, ImgConect, Titulo, Redes, Adress} from "./style"
import ContactImg from "../../images/contact.png"
import ImgConectado from "../../images/permanecaConectado.png"


export function Footer() {
  return (
    <FooterContainer>
      <ContainerContact>
        <div>
          <ImgContact src={ContactImg}/>
        </div>

        <div>
          <Titulo>Entre em contato</Titulo>
          <Adress>email</Adress>
        </div>
      </ContainerContact>
      
      <ContainerContact>
          <ImgContact src={ImgConectado} />
          <div>
            <Titulo>Permaneça conectado</Titulo>
            <Redes></Redes>
            <img src=""/> github
            <img src=""/> linkedin
          </div>
      </ContainerContact>
    </FooterContainer>
  )
}