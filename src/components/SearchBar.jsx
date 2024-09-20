
import { useState } from "react";

function SearchBar(props) {

  const { searchValue, setSearchValue } = props



  const handleSearchChange = (event) => {
    setSearchValue(event.target.value)

    const filteredProducts = allProducts.filter((eachProduct)=>{
      return eachProduct.name.includes(event.target.value)
    })//filter si returna true lo devuelve en un array sino no


    //NUNCA tenemos acceso al nuevo valor del estado en la misma secuencia de código donde lo estamos actualizando. se produce un pequeño error de asincronía porque los set los ejecuta al final
    
    setAllProducts(filteredProducts)
  }

  return (
    <div className="search-bar container">
      
      <h2>Search Bar</h2>
        
      <input  onChange={handleSearchChange} value={searchValue} type="text" />

    </div>
  )
}

export default SearchBar