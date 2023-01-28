import {Titles, Imgs, Button, ButtonIcon, ContainerCard} from "./style"
import IconAddCart from "../../icons/add_cart.svg"

export function Card({book, addToCart}) {

  return(
    <ContainerCard>
      <Imgs src={book.imagem} />
      <Titles>{book.titulo}</Titles>
      <p>{book.valor.toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</p>
      <Button onClick={() => addToCart(book, true)}>
        <span>Adicionar ao Carrinho</span>  
        <ButtonIcon src={IconAddCart} />
      </Button>
    </ContainerCard>
  )
}