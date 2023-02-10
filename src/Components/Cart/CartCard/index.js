import {
  BorderDetailsCart,
  ButtonDelete,
  ProductImg,
  DetailsCart,
  ContainerDetails,
  ContainerQuantidade,
  ButtonCart,
  QuantidadeCart,
  Text,
  Quantidade
} from './style'
import TrashDelete from "../../../icons/delete_.svg"

export function CartCard({ book, addToCart, removeFromCart, deleteFromCart }) {
  return (
    <BorderDetailsCart key={book.id}>
      <ButtonDelete type="submit" onClick={() => deleteFromCart(book)}>
        <img src={TrashDelete} />
      </ButtonDelete>

      <ProductImg src={book.imagem} />
      <ContainerDetails>
        <Text>{book.titulo}</Text>
        <Quantidade>
          <ContainerQuantidade>
            <ButtonCart
              disabled={book.quantidade === 1}
              onClick={() => removeFromCart(book)}
            >
              -
            </ButtonCart>

            <QuantidadeCart>{book.quantidade}</QuantidadeCart>

            <ButtonCart onClick={() => addToCart(book)}>+</ButtonCart>
          </ContainerQuantidade>

          <Text>
            {(book.valor * book.quantidade).toLocaleString(
              'pt-BR', { style: 'currency', currency: 'BRL' }
            )}
          </Text>
        </Quantidade>
      </ContainerDetails>
    </BorderDetailsCart>
  )
}