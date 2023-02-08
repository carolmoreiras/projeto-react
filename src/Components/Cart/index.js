import {CartContainer, CartTitle, ArrowImg, ItemsCart} from "./style"
import ArrowRight from "../../icons/double_arrow_right.svg"

export function Cart({
  showCart,
  toggleCart,
  cart,
  addToCart,
  removeFromCart,
  deleteFromCart,
}) {

  const getTotal = () => {
    let total = 0

    for (let i = 0; i < cart.length; i++) {
      const product = cart[i];
      total+= product.valor * product.quantidade
    }

    return total
  }


  return showCart ? (
    <CartContainer>
      <CartTitle>{"Carrinho"}</CartTitle>
      <ItemsCart>
        {cart.map(book => (
          <div key={book.id}>
            <span>{book.titulo} {book.valor}</span>
            <div>
              <button
                disabled={book.quantidade === 1}
                onClick={() => removeFromCart(book)}
              >
                -
              </button>

              <span>{book.quantidade}</span>
              <button onClick={() => addToCart(book)}>+</button>
              <button onClick={() => deleteFromCart(book)}>x</button>
            </div>
            <span>
              {(book.valor * book.quantidade).toLocaleString(
                'pt-BR', {style: 'currency', currency: 'BRL'}
              )}
            </span>
          </div>
        ))}
      </ItemsCart>

      <div>
       <span>Total: {getTotal().toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span> 
      </div>
      <ArrowImg src={ArrowRight} onClick={toggleCart}/>
    </CartContainer>
  ): null
}