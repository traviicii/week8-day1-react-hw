import React from 'react'


export default function Cart({user, removeFromCart, cart}) {
    const BACKEND_URL = process.env.REACT_APP_BACKEND_URL

    console.log(cart, 'right here');
    const getUniqueCart = (cart) => {
        const uniqueCart = []
        const id = new Set();

        for (let item of cart){
            if (!id.has(item.id)){
                uniqueCart.push(item)
                id.add(item.id)
            }
        }
        return uniqueCart
    };
    const getQuantity = (target, cart) => {
        let count = 0
        for (let item of cart){
            if (item.id === target.id){
                count ++
            }
        }
        return count
    }

    const getSubtotal = (cart) => {
        let subtotal = 0
        for (let item of cart){
            subtotal += item.price
        }
        return subtotal.toFixed(2)
    }

    const removeFromCartAPI = async (item) => {
        if (user.apitoken){
            const res = await fetch(`http://127.0.0.1:8000/api/cart/${item.id}`, {
                method: "DELETE",
                headers: {Authorization: `Bearer ${user.apitoken}`}
            })
            const data = await res.json()
            console.log(data)
        }
    };

    const generateInputTags = () => {
        // return Object.keys(cart).map(key => <input key={`input_${key}`} name={cart[key].product_name} defaultValue={1} hidden/>)

        return getUniqueCart(cart).map(item => <input key={`input_${item.id}`} name={item.product_name} defaultValue={[item.image, item.price, getQuantity(item, cart)]} hidden />)
    };

    return (
        <table style={{width: '100%'}}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th></th>
                    <th>Name</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>Subtotal</th>
                    <th>Remove</th>
                </tr>
            </thead>
            <tbody>
                {getUniqueCart(cart).map(item => (
                    <tr key={item.id}>
                        <th>{item.id}</th>
                        <td><img src={item.image} style={{width: '50px'}} alt=''/></td>
                        <td>{item.product_name}</td>
                        <td>{getQuantity(item, cart)}</td>
                        <td>${item.price}</td>
                        <td>${getQuantity(item,cart)*item.price.toFixed(2)}</td>
                        <td>
                            <button className='btn btn-danger' onClick={() => {removeFromCart(item); removeFromCartAPI(item)}}>
                                Remove
                            </button>
                        </td>
                    </tr>
                ))}
                <tr>
                    <th></th>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td></td>
                    <td><b>${getSubtotal(cart)}</b></td>
                    <td>
                        <form action={BACKEND_URL + '/api/cart/checkout'} method='POST'>
                            {generateInputTags()}
                            <button className="btn btn-success">Checkout</button>
                        </form>
                    </td>

                </tr>
            </tbody>
        </table>
    )
}
