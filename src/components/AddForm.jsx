import { useState } from "react"

function AddForm(props) {

  const {allProducts, setAllProducts } = props

  const [ nameValue, setNameValue ]= useState("")
  const [ priceValue, setPriceValue ]=useState(0)

  const handleNameChange = (event) => {
    console.log(event.target.value)
    let value = event.target.value
    // setNameValue(value.toUpperCase() +"trol")
    setNameValue(value)
    }

    const handlePriceCHange = (event) => {
      //setPriceValue(Number(event.target.value))
      setPriceValue(event.target.value)
    }

    const handleAddProduct = (event) => {
      event.preventDefault()//remueve todos los comportamientos predeterminados de este evento (html, legacy en este caso)
      console.log("Añadiendo producto")

      //1. Recopilar el producto a crear
      const newProduct = {
        name: nameValue,
        price: priceValue,
        isPurchased: false //valor inicial que siempre será así al inicio
      }

      console.log(newProduct)

      //2. Agregarlo a donde están todos los productos
      // const clone = [...allProducts]
      // clone.unshift(newProduct)
      // setAllProducts(clone)

      setAllProducts( (elValorActualDelEstado) => {
        console.log(elValorActualDelEstado)

        const clone = [...elValorActualDelEstado]
        clone.unshift(newProduct)
        return clone
      })

      // setAllProducts((current)=>[newProduct, ...current])
      //current es una convención. El valor actual del estado
    }

  return (
    <div className="add-form container">
      
      <h2>Add Form</h2>

      <form onSubmit={handleAddProduct}>

        <div>
          <label htmlFor="name">Name: </label>
          <input onChange={handleNameChange} value={nameValue} type="text" name="name"/>
        </div>

        <div>
          <label htmlFor="price">Price: </label>
          <input  onChange={handlePriceCHange}  velue={priceValue} type="number" name="price"/>
        </div>

        <button>Add</button>

      </form>

    </div>
  )
}

export default AddForm