import React from 'react'
import { Link } from 'react-router-dom'

export default function Signin({ logMeIn }) {

    const handleSubmit = async (e) => {
        e.preventDefault()

        const username = e.target.username.value;
        const password = e.target.password.value;

        const url = 'http://127.0.0.1:8000/api/login';
        const options = {
            method: "POST",
            headers: {
                Authorization: `Basic ${btoa(username+":"+password)}`
                // 'Content-Type': 'application/json'
            },
            // body: JSON.stringify({
            //     username: username,
            //     password: password
            // })
        };

        const resp = await fetch(url, options);
        const data = await resp.json();
        if (data.status === 'ok') {
            const myUserInfo = data.data
            console.log(myUserInfo)
            logMeIn(myUserInfo)
        }

    }

    return (
        <div>
            <div style={{ maxWidth: '250px' }}>
            <h1>Log In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" name='username' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' id="exampleInputPassword1" />
                    </div>
                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        </div>
    )
}
