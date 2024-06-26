import React, { useState, useEffect } from 'react'
import { auth } from '../../firebase'
import { toast } from 'react-toastify'
import { useSelector } from 'react-redux'

const ForgotPassword = ({ history }) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const {user} = useSelector((state) => ({...state}));

  useEffect(() =>{
   if(user && user.token) history.push("/");

  } ,[user])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    console.log(process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT)

    const config = {
      url: process.env.REACT_APP_FORGOT_PASSWORD_REDIRECT,
      handleCodeInApp: true,
    };

    auth.sendPasswordResetEmail(email , config)
    .then(()=> {
      setEmail("");
      setLoading(false);
      toast.success('Check your email for password reset');

    }).catch((error) => {
      setLoading(false)
      toast.error(error.message);
      console.log("ERROR IN MSG FORGOT PASSWORD" , error)
    })

  };

  return (
    <div className='container col-md-6 offset-md-3 p-5'>
      {loading ? (<h4 className='text-danger'>Loading</h4>) : (<h4>Forgot Password</h4>)}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className='form-control'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="type your email"
          autoFocus
        />
        <br />
        <button className='btn btn-raised' disabled={!email}>Submit</button>

      </form>
    </div>

  )
}

export default ForgotPassword;