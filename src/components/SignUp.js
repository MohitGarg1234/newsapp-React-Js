// import React,{useState} from 'react'
// import {useNavigate} from 'react-router-dom';
// import { createUserWithEmailAndPassword,updateProfile} from 'firebase/auth';
// import { auth } from '../firebase';
// const SignUp = (props) => {
//   const[credentials,setCredentials] = useState({name:"" ,email:"",password:"",cpassword:""});
//     let history = useNavigate();
//     const handleSubmit =() => {
//       console.log(credentials);
//       createUserWithEmailAndPassword(auth,credentials.email,credentials.cpassword)
//       .then(async(res)=>{
//         const user = res.user;
//         await updateProfile(user,{
//           displayName : credentials.name
//         });
//         console.log(user);
//         history("/");
//       })
//       .catch((err)=>{
//         console.log("Error : ",err.message);
//         history('/login');
//       });
//     }
//   const onChange = (e) =>{
//     setCredentials({...credentials,[e.target.name]:e.target.value})
//   }
//   return (
//     <div className='container mt-3'>
//       <h2 className='text-center'>SignUp - Create New Account</h2>
//       {/* <form onSubmit={handleSubmit}> */}
//         <div className="mb-3">
//           <label htmlFor="name" className="form-label">Name</label>
//           <input type="text" id="name" name ="name" onChange={(event) =>
//             setCredentials((prev) => ({ ...prev, name: event.target.value }))
//           } className="form-control" required minLength={3}/>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="email" className="form-label">Email address</label>
//           <input type="email" className="form-control" onChange={onChange} id="email" name="email" aria-describedby="emailHelp" required />
//           <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="password" className="form-label">Password</label>
//           <input type="password" id="password" onChange={onChange} name ="password" className="form-control" required minLength={5}/>
//         </div>
//         <div className="mb-3">
//           <label htmlFor="cpassword" className="form-label">Confirm Password</label>
//           <input type="password" id="cpassword" onChange={onChange} name ="cpassword" className="form-control" required minLength={5}/>
//         </div>
//         <button onSubmit={handleSubmit} type="submit" className="btn btn-primary">SignUp</button>
//       {/* </form> */}
//     </div>
//   )
// }

// export default SignUp

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";

import { auth } from "../firebase";


function Signup() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    pass: "",
  });
  const [errorMsg, setErrorMsg] = useState("");
  const [submitButtonDisabled, setSubmitButtonDisabled] = useState(false);

  const handleSubmission = () => {
    if (!values.name || !values.email || !values.pass) {
      setErrorMsg("Fill all fields");
      return;
    }
    setErrorMsg("");

    setSubmitButtonDisabled(true);
    createUserWithEmailAndPassword(auth, values.email, values.pass)
      .then(async (res) => {
        setSubmitButtonDisabled(false);
        const user = res.user;
        await updateProfile(user, {
          displayName: values.name,
        });
        navigate("/");
        console.log(user);
      })
      .catch((err) => {
        setSubmitButtonDisabled(false);
        setErrorMsg(err.message);
      });
  };

  return (
    <div className='container mt-3'>
        <h2 style={{marginTop:"70px"}} className='text-center '>SignUp - Create A New Account</h2>
        <div className="mb-3">
           <label htmlFor="name" className="form-label">Name</label>
           <input type="text" id="name" name ="name" onChange={(event) =>
             setValues((prev) => ({ ...prev, name: event.target.value }))
           } className="form-control" required minLength={3}/>
         </div>
        
        <div className="mb-3">
           <label htmlFor="email" className="form-label">Email address</label>
           <input type="email" className="form-control" onChange={(event) =>
            setValues((prev) => ({ ...prev, email: event.target.value }))
          } id="email" name="email" aria-describedby="emailHelp" required />
           <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
        </div>
        
        <div className="mb-3">
           <label htmlFor="password" className="form-label">Password</label>
           <input type="password" id="password" onChange={(event) =>
            setValues((prev) => ({ ...prev, pass: event.target.value }))
          } name ="password" className="form-control" required minLength={5}/>
        </div>

        <div >
          <b >{errorMsg}</b>
          <button onClick={handleSubmission} disabled={submitButtonDisabled} type="submit" className="btn btn-primary">SignUp</button>
        </div>

    </div>
  );
}

export default Signup;