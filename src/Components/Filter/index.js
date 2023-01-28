import { FilterContainer } from "./style"
import { useState } from "react";

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
      <div>
        <p>Filtros</p>
        <span onClick={toggleFilter}> {"<<"} </span>
      </div>
      <p>Ordenar por:</p>
      <div>
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
      </div>

      <div>
        <span>Valor Mínimo</span>
        <input
          name="minValue"
          type="number"
          min={0}
          value={minValue}
          onChange={handleFilterChange}
        />
      </div>
      <div>
        <span>Valor Máximo</span>
        <input
          name="maxValue"
          type="number"
          min={0}
          value={maxValue}
          onChange={handleFilterChange}
        />
      </div>
      <div>
        <span>Título</span>
        <input
          name="title"
          type="text"
          value={title}
          onChange={handleFilterChange}
        />
      </div>
      <button onClick={handleClearFilters}>Limpar Filtros</button>

    </FilterContainer>
  ) : null
}
