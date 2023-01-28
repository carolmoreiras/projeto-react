
import TelescopioImg from "../../icons/icon-telescope.png";
import {
  HeaderContainer,
  InputContainer,
  Button,
  Image,
  SearchContainer,
  CartImage,
  IconContainer,
  Logo,
  Filter,
  MenuContainers,
} from "./style"
import MyCart from "../../icons/cart.png"
import FilterImg from "../../icons/filter.png"
import LogoImg from "../../images/LOGO.png"
import { useState } from "react";

export function Header({
  toggleCart,
  toggleFilter,
  filterBooks,
}) {

  const [search, setSearch] = useState("")
  const handleChange = (e) => {
    const filter = { minValue: 0, maxValue: 0, title: "" }

    setSearch(e.target.value)
    filter.title = e.target.value


    filterBooks(filter)
  }

  return (
    <HeaderContainer>
      <Logo src={LogoImg} />
      <SearchContainer>
        <InputContainer
          value={search} onChange={handleChange}
          type="text"
          placeholder="O que você deseja buscar..."
        />
        <Button>
          <Image src={TelescopioImg} />
        </Button>
      </SearchContainer>

      <MenuContainers>
        <IconContainer onClick={toggleFilter}>
          <Filter src={FilterImg} />
          <p>Filtrar</p>
        </IconContainer>

        <IconContainer onClick={toggleCart}>
          <CartImage src={MyCart} />
          <p>Meu Carrinho</p>
        </IconContainer>
      </MenuContainers>

    </HeaderContainer>
  );
}

