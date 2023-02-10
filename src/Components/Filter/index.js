import {
  FilterContainer,
  FilterTitle,
  OrderContainer,
  FilterButton,
  ArrowImg,
  MaiorMenorValor,
  FiltertHeader
} from "./style"
import { useState } from "react";
import ArrowRight from "../../icons/double_arrow_right.svg"

export function Filter({
  showFilter,
  toggleFilter,
  sortBooks,
  filterBooks,
  clearFilters,
}) {
  const [sortBy, setSortBy] = useState("")
  const [minValue, setMinValue] = useState(0)
  const [maxValue, setMaxValue] = useState(0)
  const [title, setTitle] = useState("")

  const handleSortChange = (e) => {
    setSortBy(e.target.name)
    sortBooks(e.target.name)
  }

  const handleClearFilters = () => {
    setSortBy("")
    setMinValue(0)
    setMaxValue(0)
    setTitle("")
    clearFilters()
  }

  const handleFilterChange = (e) => {
    const filter = { minValue, maxValue, title }
    let value

    if (e.target.name === "minValue") {
      value = Number(e.target.value)
      setMinValue(value)
      filter.minValue = value
    }

    if (e.target.name === "maxValue") {
      value = Number(e.target.value)
      setMaxValue(value)
      filter.maxValue = value
    }

    if (e.target.name === "title") {
      setTitle(e.target.value)
      filter.title = e.target.value
    }

    filterBooks(filter)
  }

  return showFilter ? (
    <FilterContainer>
      <FiltertHeader>
        <FilterTitle>Filtros</FilterTitle>
        <ArrowImg src={ArrowRight} onClick={toggleFilter} />
      </FiltertHeader>
      <OrderContainer>
        <p>Ordenar por:</p>
        <MaiorMenorValor>
          <div>
            <input
              type="radio"
              id="maior"
              name="maior"
              value={sortBy}
              checked={sortBy === "maior"}
              onChange={handleSortChange}
            />
            <label htmlFor="maior">Maior Valor</label>
          </div>

          <div>
            <input
              type="radio"
              id="menor"
              name="menor"
              value={sortBy}
              checked={sortBy === "menor"}
              onChange={handleSortChange}
            />
            <label htmlFor="menor">Menor Valor</label>
          </div>
        </MaiorMenorValor>
      </OrderContainer>

      <OrderContainer>
        <span>Valor Mínimo</span>
        <input
          name="minValue"
          type="number"
          min={0}
          value={minValue}
          onChange={handleFilterChange}
        />
      </OrderContainer>
      <OrderContainer>
        <span>Valor Máximo</span>
        <input
          name="maxValue"
          type="number"
          min={0}
          value={maxValue}
          onChange={handleFilterChange}
        />
      </OrderContainer>
      <OrderContainer>
        <span>Título</span>
        <input
          name="title"
          type="text"
          value={title}
          onChange={handleFilterChange}
        />
      </OrderContainer>
      <FilterButton onClick={handleClearFilters}>Limpar Filtros</FilterButton>
    </FilterContainer>
  ) : null
}
