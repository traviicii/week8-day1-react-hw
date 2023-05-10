import React from 'react'

export const addToCartAPI = async ({user, product}) => {
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