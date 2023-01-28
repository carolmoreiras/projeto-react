
import {Card} from "../Card";
import {ProductsCard} from "./style"

export function Products ({books, addToCart}) {
  return (
    <ProductsCard>
      {books.map(book => (
        <Card 
          addToCart={addToCart}
          key={book.id}
          book={book}
        />
      ))} 
    </ProductsCard>
  )  
}

