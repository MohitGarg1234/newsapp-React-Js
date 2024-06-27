// FUNCTION BASED COMPONENT
import './App.css';
import React, { useState} from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
import LoadingBar from "react-top-loading-bar";
import Login from './components/Login'
import SignUp from './components/SignUp'
import Favorites from './components/Favorites';
const App = ()=> {
  
  // apiKey=process.env.REACT_APP_NEWS_API
  const apiKey="dcc2e10acb8448e2bbfa779073d541ae"
  // const apiKey="a1e9c4dd98e845cb80eaef49b582a46e";
  const [progress,setProgress] = useState(0);
    return (
      <div>
        <Router>
        <Navbar/>
        <LoadingBar height={1.1} color='#f11946' progress={progress}/>
        <Routes>
          <Route  path='/' element={<News  setProgress={ setProgress} apiKey={ apiKey} key="general" pageSize={6} country="in" category="General"/>}></Route>
        </Routes>
        <Routes>
          <Route  path='/general' element={<News setProgress={ setProgress} apiKey={ apiKey} key="general" pageSize={6} country="in" category="General"/>}></Route>
        </Routes>
        <Routes>
          <Route  path='/Sports' element={<News setProgress={ setProgress} apiKey={ apiKey} key="Sports" pageSize={6} country="in" category="Sports"/>}></Route>
        </Routes>
        <Routes>
          <Route  path='/Technology' element={<News setProgress={ setProgress} apiKey={ apiKey} key="Technology" pageSize={6} country="in" category="Technology"/>}></Route>
        </Routes>
        <Routes>
          <Route  path='/Business' element={<News setProgress={ setProgress} apiKey={ apiKey} key="Business" pageSize={6} country="in" category="Business"/>}></Route>
        </Routes>
        <Routes>
          <Route  path='/Entertainment' element={<News setProgress={ setProgress} apiKey={ apiKey} key="Entertainment" pageSize={6} country="in" category="Entertainment"/>}></Route>
        </Routes>
        <Routes>
          <Route  path='/Health' element={<News setProgress={ setProgress} apiKey={ apiKey} key="Health" pageSize={6} country="in" category="Health"/>}></Route>
        </Routes>
        <Routes>
          <Route  path='/Science' element={<News setProgress={ setProgress} apiKey={ apiKey} key="Science" pageSize={6} country="in" category="Science"/>}></Route>
        </Routes>
        <Routes>
            <Route path="/login" element={<Login/>}></Route>
        </Routes>
        <Routes>
            <Route path="/signup" element={<SignUp/>}></Route>
        </Routes>
        <Routes>
            <Route path="/favorites" element={<Favorites/>}></Route>
        </Routes>
        </Router>
          
        {/* <News pageSize={6} country="in" category="sports"/> */}
      </div>
    )
  }
 export default App;
 
// CLASS BASED COMPONENT
// import './App.css';
// import React, { Component } from 'react'
// import Navbar from './components/Navbar';
// import News from './components/News';
// import {BrowserRouter as Router,Route,Routes} from 'react-router-dom';
// import LoadingBar from "react-top-loading-bar";
// export default class App extends Component {
//   // apiKey=process.env.REACT_APP_NEWS_API
//   // apiKey="dcc2e10acb8448e2bbfa779073d541ae"
//   apiKey="a1e9c4dd98e845cb80eaef49b582a46e";
//   state = {
//     progress:0
//   }
//   setProgress = (progress)=>{
//     this.setState({progress: progress})
//   }
//   render() {
//     return (
//       <div>
//         <Router>
//         <Navbar/>
//         <LoadingBar height={1.1} color='#f11946' progress={this.state.progress}/>
//         <Routes>
//           <Route  path='/' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={6} country="in" category="General"/>}></Route>
//           <Route  path='/general' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize={6} country="in" category="General"/>}></Route>
//           <Route  path='/Sports' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Sports" pageSize={6} country="in" category="Sports"/>}></Route>
//           <Route  path='/Technology' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Technology" pageSize={6} country="in" category="Technology"/>}></Route>
//           <Route  path='/Business' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Business" pageSize={6} country="in" category="Business"/>}></Route>
//           <Route  path='/Entertainment' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Entertainment" pageSize={6} country="in" category="Entertainment"/>}></Route>
//           <Route  path='/Health' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Health" pageSize={6} country="in" category="Health"/>}></Route>
//           <Route  path='/Science' element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="Science" pageSize={6} country="in" category="Science"/>}></Route>
//         </Routes>
//         {/* <News pageSize={6} country="in" category="sports"/> */}
//         </Router>
          
//       </div>
//     )
//   }
// }

