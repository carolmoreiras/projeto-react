import {
  CartContainer,
  CartHeader,
  Title,
  ArrowImg,
  ItemsCart,
  VazioImagem,
  ValorTotal,
  FinalButtonBack,
  Checkout,
  ContainerButtons,
} from "./style"
import ArrowRight from "../../icons/double_arrow_right.svg"
import { CartCard } from "./CartCard"
import VazioImg from "../../images/vazio.png";
import Check from "../../icons/check.svg"
import { CheckoutFeedback } from "./CheckoutFeedback"

export function Cart({
  showCart,
  toggleCart,
  cart,
  addToCart,
  removeFromCart,
  deleteFromCart,
  checkoutCart,
  showFeedback,
  toggleFeedback
}) {

  const getTotal = () => {
    let total = 0

    for (let i = 0; i < cart.length; i++) {
      const product = cart[i];
      total += product.valor * product.quantidade
    }

    return total
  }


  return showCart ? (
    <CartContainer>
      <CartHeader>
        <Title>Carrinho</Title>
        <ArrowImg src={ArrowRight} onClick={toggleCart} />
      </CartHeader>
      <ItemsCart>
        {cart.length ? cart.map(book => (
          <CartCard
            key={book.id}
            book={book}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            deleteFromCart={deleteFromCart}
          />
        )) : showFeedback ? (
          <CheckoutFeedback toggleFeedback={toggleFeedback}/>
        ) : (
          <div>
            <VazioImagem src={VazioImg} />
          </div>
        )}
      </ItemsCart>
      <ValorTotal><p>Valor Total: </p>{getTotal().toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</ValorTotal>
      <ContainerButtons>
        <FinalButtonBack type="submit" onClick={toggleCart}>Continuar Comprando</FinalButtonBack>

        <Checkout type="submit" disabled={!cart.length} onClick={checkoutCart}>
          <img src={Check} />Finalizar Compra
        </Checkout>
      </ContainerButtons>
    </CartContainer>
  ) : null
}