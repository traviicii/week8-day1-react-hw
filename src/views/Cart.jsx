import React from 'react'


export default function Cart({user, removeFromCart, cart}) {
    console.log(cart, 'right here');
    const getUniqueCart = (cart) => {
        console.log(cart, "inside unique")
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
                    <td></td>

                </tr>
            </tbody>
        </table>
    )
}
