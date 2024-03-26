import React, { useState } from 'react';
import { auth } from '../../firebase'

const Register = () => {
    const [email, setemail] = useState("");


    const handleSubmit = () => {


    }

    const registerForm = () => <form onSubmit={handleSubmit}>
        <input
            type="email"
            className="form-control"
            value={email}
            onChange={e => setemail(e.target.value)}
            autoFocus
        />

        <button type="submit" className="btn btn-raised">Register</button>

    </form>



    return (
        <div className="container p-5">
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h1>Register</h1>
                    {registerForm()}
                </div>
            </div>
        </div>
    )
}

export default Register; 