import React, { useState } from 'react';
import { auth } from '../../firebase'
import { toast, ToastContainer} from 'react-toastify'
import "react-toastify/dist/ReactToastify.css";

const Register = () => {
    const [email, setemail] = useState("");


    const handleSubmit = async (e) => {
        e.preventDefault();

        // to sned email using firebase 
        const config = {
            url: 'http://localhost:3000/register/complete',
            handleCodeInApp: true,
        };

        await auth.sendSignInLinkToEmail(email, config);
        toast.success(
            `Email is sned to ${email} Click to complete registration`
        );

        // save the email in the local storage so that we can prepopulate 
        // in the registration complete page
        window.localStorage.setItem("emailForRegistration" , email);
       
        // clear the state after sumit the form
        setemail("");

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
                    <ToastContainer/>
                    {registerForm()}
                </div>
            </div>
        </div>
    )
}

export default Register; 