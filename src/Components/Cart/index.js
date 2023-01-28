import {CartContainer} from "./style"

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
      <p>{"Cart"}</p>
      <span onClick={toggleCart}> {">>"}</span>
      <div>
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
      </div>

      <div>
       <span>Total: {getTotal().toLocaleString('pt-BR', {style: 'currency', currency: 'BRL'})}</span> 
      </div>
    </CartContainer>
  ): null
}