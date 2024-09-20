
function ProductCard(props) {

  const handleBuy = () => {
    console.log("intentando marcarf este producto como comprado", props.index)

    props.setAllProducts((currentState)=>{
      console.log(currentState)

      //modificar un objeto del array (sin mutar el original)
      //hacemos un clon de tipo DEEP 
      const clone = structuredClone(currentState)

      //modificamos el elemento en la posición que queremos modificar
      clone[props.index].isPurchased = true

      //retornar el nuevo valor de todo el estado
      return clone
    })
  }

  return (
    <div className="product-card">
      <h3>{props.eachProduct.name}</h3>
      <p>{props.eachProduct.price}€</p>
      <p>{props.eachProduct.isPurchased === true ? "✅" : "🟡"}</p>
      <button onClick={handleBuy}>Buy</button>
    </div>
  )
}

export default ProductCard