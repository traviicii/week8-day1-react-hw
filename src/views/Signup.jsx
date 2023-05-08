import React from 'react'
import { Link } from 'react-router-dom'

export default function Signup() {
    const handleSubmit = async (e) => {
        e.preventDefault()

        const username = e.target.username.value;
        const password = e.target.password.value;
        const confirmPassword = e.target.confirmPassword.value;

        const first_name = e.target.first_name.value;
        const last_name = e.target.last_name.value;
        const email = e.target.email.value;
        

        const url = 'http://127.0.0.1:8000/api/signup';
        const options = {
            method: "POST",
            headers: {
                "Content-Type": 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
                first_name: first_name,
                last_name: last_name,
                email: email
            })
        };

        if (password !== confirmPassword) {
            // Throw message here.
            return
        }

        const resp = await fetch(url, options);
        const data = await resp.json();
        if (data.status === 'ok') {
            // Show success message
            console.log(data)
        }

    }

    return (
        <div>
            <div style={{ maxWidth: '250px' }}>
                <h1>Sign Up</h1>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Username</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" name='username' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" name='password' id="exampleInputPassword1" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" name='confirmPassword' id="exampleInputPassword1" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">First Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" name='first_name' aria-describedby="emailHelp" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="exampleInputEmail1" className="form-label">Last Name</label>
                        <input type="text" className="form-control" id="exampleInputEmail1" name='last_name' aria-describedby="emailHelp" />
                    </div>

                    <div className="mb-3">
                        <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
                        <input type="email" className="form-control" name='email' id="exampleInputPassword1" />
                    </div>

                    <button type="submit" className="btn btn-primary">Submit</button>
                </form>
                <p>Already have an account? <Link className='text-decoration-none' to='/signin'>Log  In Here</Link></p>
            </div>
        </div>
    )
}
