import React, {useState, useEffect} from 'react'
import Card from '../components/Card'

export default function Home( {user, addToCart, cart}) {

  // usestate returns an array with 2 things: indez[0] contains the state object, index[1] contains update function
  // useState
  const [products, setProducts] = useState([])

  const getProducts = async () => {
    const res = await fetch(`http://127.0.0.1:8000/api/products`);
    const data = await res.json();
    const products = data.products;
    setProducts(products);
  }

  const showProducts = () => {
    return products.map(product => <Card product={product} key={product.id} user={user} addToCart={addToCart} cart={cart}/>)
  };

  useEffect(() => {getProducts()}, [])

  return (
    <div style={{display: 'flex', flexFlow: 'row', flexWrap: 'wrap', justifyContent: "space-around"}}>
      {showProducts()}
      
    </div>
  )
}
