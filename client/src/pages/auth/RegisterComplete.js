import React , { useState ,useEffect }from 'react'
import { auth } from '../../firebase';

const RegisterComplete = () => {
    const [email , setemail] = useState("")
    const [password , setPassword] = useState("");


  useEffect(() => {

    setemail(window.localStorage.getItem('emailForRegistration'))

  },[])

  const handSubmit = (e) => {
    e.preventDefault();

  }

   

  const completeRegistrationForm = () => <form onSubmit={handSubmit}>
  <input 
    type="email"
    placeholder="Enter email"
    className="form-control"
    value={email}
    disabled
  />
  <input
    tyep="password"
    placeholder="Enter password"
    className="form-control"
    value={password}
    onChange={e => setPassword(e.target.value)}
  />
 <br/>
  <button type="submit" className="btn btn-raised">Registration Complete</button>
     
  </form>

  
  return (
    
     <div className="container p-5">
        <div className="row">
            <div className="col-md-6 offset">
                <h1>Register complete</h1>
                {completeRegistrationForm()}
            </div>
        </div>
     </div>
  )
}

export default RegisterComplete
