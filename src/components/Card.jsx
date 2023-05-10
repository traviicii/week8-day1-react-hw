import React from 'react'
import Modal from './Modal'
import { Link } from 'react-router-dom'



export default function Card({ product, addToCart, user, cart }) {

    // const Modal = ({product_name =product.product_name, key=product.id, modalName=product.product_name, description = product.description}) => {

    //     return 
    //     (<>
    //         <div className="modal fade" id={modalName} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    //             <div className="modal-dialog">
    //                 <div className="modal-content">
    //                     <div className="modal-header">
    //                         <h1 className="modal-title fs-5" id={modalName}>{product_name}</h1>
    //                         <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
    //                     </div>
    //                     <div className="modal-body">
    //                         <p>{}</p>
    //                     </div>
    //                     <div className="modal-footer">
    //                         <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
    //                         <button type="button" className="btn btn-primary">Save changes</button>
    //                     </div>
    //                 </div>
    //             </div>
    //         </div>
    //     </>)
    // }

    const addToCartAPI = async () => {
        if (user.apitoken) {
            const url = `http://127.0.0.1:8000/api/cart`
            const options = {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${user.apitoken}`
                },
                body: JSON.stringify({ product_id: product.id })
            }

            const res = await fetch(url, options)
            const data = await res.json();

            if (data.status === 'ok') {
                //show message
                console.log('Successfull add to database cart.')
            }
        }

    }

    return (


        <div className="card" style={{ width: "18rem", marginBottom: "20px" }}>
            <img src={product.image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{product.product_name}</h5>
                <p className="card-text">${product.price}</p>
                <div style={{display: "flex", justifyContent: "space-around"}}>
                <button className="btn btn-primary" onClick={() => { addToCart(product); addToCartAPI() }}>Add to cart</button>
                <button type="button" className="btn btn-primary">
                    <Link className='text-decoration-none' style={{color: 'white'}} to={`/singleproduct/${product.id}` }>More Info</Link>
                </button>
                </div>
            </div>
        </div>


    )
}

// className="btn btn-primary" 
//                         product_name ={product.product_name} 
//                         key={product.id}
//                         modalName={product.product_name}
//                         description = {product.description}


