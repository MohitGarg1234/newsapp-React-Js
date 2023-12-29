import React from 'react'
import { getAuth,signOut} from "firebase/auth";
import {Link,useLocation,useNavigate} from "react-router-dom"
const Navbar = (props)=>{

  const auth = getAuth();
  const user = auth.currentUser;
  let location = useLocation();
    let history = useNavigate();
      const handleLogout =()=>{
        signOut(auth).then(()=>{
          history("/");
        }
        )
      }
      const Login = location.pathname ==='/login';
      const Signup = location.pathname ==='/signup';
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark ">
          <div className="container-fluid"> 
            <Link className="navbar-brand" to="/">NewsEveryday</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/General">General</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Sports">Sports</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Technology">Technology</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Business">Business</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Entertainment">Entertainment</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Health">Health</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/Science">Science</Link>
                </li>
              </ul>
              
            </div>
          </div>
          {!user?<form className='d-flex'>
          {!Login && <Link className="btn btn-primary mx-2" to="/login" role='button'>Login</Link>}
          {!Signup && <Link className="btn btn-primary mx-2" to="/signup" role='button'>SignUp</Link>}
          </form>:<><h6 style={{color: "white",marginTop:"17px"}}  >{user.displayName}</h6>
          <button onClick={handleLogout} className="btn btn-primary mx-2"> Logout </button></>}
</nav>
      </div>
    )
  }

export default Navbar


// CLASS BASED COMPONENT
// export class Navbar extends Component {
//   render() {
//     return (
//       <div>
//         <nav className="navbar navbar-expand-lg navbar-dark bg-dark ">
//           <div className="container-fluid"> 
//             <Link className="navbar-brand" to="/">NewsEveryday</Link>
//             <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//               <span className="navbar-toggler-icon"></span>
//             </button>
//             <div className="collapse navbar-collapse" id="navbarSupportedContent">
//               <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/">Home</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/General">General</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/Sports">Sports</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/Technology">Technology</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/Business">Business</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/Entertainment">Entertainment</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/Health">Health</Link>
//                 </li>
//                 <li className="nav-item">
//                   <Link className="nav-link" to="/Science">Science</Link>
//                 </li>
//               </ul>
              
//             </div>
//           </div>
// </nav>
//       </div>
//     )
//   }
// }

// export default Navbar
