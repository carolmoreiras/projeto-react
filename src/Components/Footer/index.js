import { FooterContainer, ContainerContact, ImgContact, Titulo, LinksRedes, } from "./style"
import ContactImg from "../../images/contact.png"
import ImgConectado from "../../images/permanecaConectado.png"


export function Footer() {
  return (
    <FooterContainer>
      <ContainerContact>
        <div>
          <ImgContact src={ContactImg} />
        </div>

        <div>
          <Titulo>Entre em contato</Titulo>
          <LinksRedes>
            <a href="mailto:caahrolmoreira@gmail.com">Email</a>
            <a href="tel:+5527997328388">WhatsApp</a>
          </LinksRedes>
        </div>
      </ContainerContact>

      <ContainerContact>
        <ImgContact src={ImgConectado} />
        <div>
          <Titulo>Permaneça conectado</Titulo>
          <LinksRedes>
            <a href="https://github.com/carolmoreiras">github.com/carolmoreiras</a>
            <a href="https://www.linkedin.com/in/carol-moreiras/"> linkedin.com/in/carol-moreiras</a>
          </LinksRedes>
        </div>
      </ContainerContact>
    </FooterContainer>
  )
}