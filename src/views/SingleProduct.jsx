import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom';
import { addToCartAPI } from '../apiHelper/apiCalls';


export default function SingleProduct({ addToCart, user }) {

  const { productid } = useParams()
  const [product, setProduct] = useState()

  const getProduct = async () => {
    console.log(productid, 'here')
    const url = `http://127.0.0.1:8000/api/products/${productid}`
    const res = await fetch(url);
    const data = await res.json();
    const product = data.product;
    setProduct(product);
  }

  useEffect(() => { getProduct() }, [])


  return (
    <>
    {
      product ?
        (
          <div style = {{ display: 'flex', justifyContent: 'center'}} >
    <div className="card" style={{ width: "18rem" }}>
      <img src={product.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.product_name}</h5>
        <p className="card-text">{product.description}</p>
        <p className="card-text">${product.price}</p>
        <button className="btn btn-primary" onClick={() => { addToCart(product); addToCartAPI(user, product) }}>Add to cart</button>

      </div>
    </div>
    </div >
    )
    :
  (<h1>loading...</h1>)
}
</>
  )
}
