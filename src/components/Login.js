import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import {auth} from '../firebase';
const Login = (props) => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    email: "",
    pass: "",
  });
  // const [errorMsg, setErrorMsg] = useState("");
  // const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.email || !values.pass) {
      return;
    }

    signInWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        navigate("/");
      })
      .catch((err) => {
        alert("Wrong Email / Password")
      });
  };
  return (
    <div className='container mt-3'>
      <h2 style={{marginTop:"70px"}} className='text-center'>Login To Continue To Your News -  NewsEveryday</h2>
        <div className="mb-3">
            <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
            <input type="email" className="form-control" value={values.email} onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          } id="email" name='email' aria-describedby="emailHelp"/>
            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        <div className="mb-3">
            <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
            <input type="password" className="form-control" value={values.password} onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          } id="password" name='password'/>
        </div>
        <button className="btn btn-primary" onClick={handleSubmission}>LogIn</button>
    </div>
  )
}

export default Login


