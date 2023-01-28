import "./style.css";
import { Header } from "./Components/Header";
import { Products } from "./Components/Products";
import { Footer } from "./Components/Footer";
import { Filter } from "./Components/Filter";
import { Cart } from "./Components/Cart";
import { Main } from "./style";
import { useState } from "react";
import { books } from "./books";

const getLocalStorageCart = () => {
  const cart = JSON.parse(localStorage.getItem("cart"))
  
  if (cart) {
    return cart
  }

  return []
}

const updateLocalStorageCart = (cart) => {
  localStorage.clear()
  localStorage.setItem("cart", JSON.stringify(cart))
}

function App() {
  const [showFilter, setShowFilter] = useState(false)
  const [showCart, setShowCart] = useState(false)
  const [cart, setCart] = useState(getLocalStorageCart())
  const [filteredBooks, setFilteredBooks] = useState(books)

  const toggleFilter = () => setShowFilter(prevState => !prevState)

  const toggleCart = () => {
    setShowCart(prevState => !prevState)
  }

  const addToCart = (book, showAlert = false) => {
    let newCart = [...cart]

    newCart = newCart.map(bookOnCart => {
      if (bookOnCart.id === book.id) {
        bookOnCart.quantidade++
      }

      return bookOnCart
    })

    const bookOnCart = newCart.find(cartBook => cartBook.id === book.id)

    if (!bookOnCart) {
      book.quantidade = 1
      newCart.push(book)
    }

    setCart(newCart)
    updateLocalStorageCart(newCart)
    showAlert && alert("Produto adicionado ao carrinho")
  }

  const removeFromCart = (book) => {
    let newCart = [...cart]

    newCart = newCart.map(bookOnCart => {
      if (bookOnCart.id === book.id && bookOnCart.quantidade > 0) {
        bookOnCart.quantidade--
      }

      return bookOnCart
    })

    newCart = newCart.filter(cartBook => cartBook.quantidade > 0)

    setCart(newCart)
    updateLocalStorageCart(newCart)
  }

  const deleteFromCart = (book) => {
    let newCart = cart.filter(cartBook => cartBook.id !== book.id)

    setCart(newCart)
    updateLocalStorageCart(newCart)
  }

  const sortBooks = (sortBy) => {
    const sortedBooks = [...filteredBooks]

    if (sortBy === "maior") {
      sortedBooks.sort((a, b) => b.valor - a.valor)
    } else {
      sortedBooks.sort((a, b) => a.valor - b.valor)
    }

    setFilteredBooks(sortedBooks)
  }

  const filterBooks = (filters) => {
    let newFilteredBooks = [...books]

    if (filters.minValue > 0) {
      newFilteredBooks = newFilteredBooks.filter(book => {
        return book.valor > filters.minValue
      })
    }

    if (filters.maxValue > 0) {
      newFilteredBooks = newFilteredBooks.filter(book => {
        return book.valor < filters.maxValue
      })
    }

    if (filters.title !== "") {
      newFilteredBooks = newFilteredBooks.filter(book => {
        return book.titulo.toLowerCase().includes(filters.title.toLowerCase())
      })
    }

    setFilteredBooks(newFilteredBooks)
  }

  return (
    <div>
      <Header toggleFilter={toggleFilter} filterBooks={filterBooks} toggleCart={toggleCart} />
      <Main>
        <Filter
          showFilter={showFilter}
          toggleFilter={toggleFilter}
          sortBooks={sortBooks}
          filterBooks={filterBooks}
          clearFilters={() => setFilteredBooks(books)}
        />

        <Products books={filteredBooks} addToCart={addToCart} />

        <Cart
          cart={cart}
          showCart={showCart}
          toggleCart={toggleCart}
          addToCart={addToCart}
          removeFromCart={removeFromCart}
          deleteFromCart={deleteFromCart}
        />
      </Main>

      <Footer />
    </div>
  );
}

export default App;
