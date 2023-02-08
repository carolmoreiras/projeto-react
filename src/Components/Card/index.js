import {Titles, Imgs, Button, ButtonIcon, ContainerCard, Paragrafo, AddCart} from "./style"
import IconAddCart from "../../icons/add_cart.svg"

export function Card({book, addToCart}) {

  return(
    <ContainerCard>
      <Imgs src={book.imagem} />
      <Titles>{book.titulo}</Titles>
      <Paragrafo>{book.valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</Paragrafo>
      <Button onClick={() => addToCart(book, true)}>
        <AddCart>Adicionar ao Carrinho</AddCart>  
        <ButtonIcon src={IconAddCart} />
      </Button>
    </ContainerCard>
  )
}