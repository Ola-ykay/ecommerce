// import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import Header from "./Components/Header/Header"
// import Cart from './Components/Cart/Cart';
// import Profile from './Components/Profile/Profile'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import  styles from './App.css'

function App() {
  return (
    <div>
      <Router>
<Header />
        <Routes>
          <Route path="/" element={<Home />} />
          
{/* <Route path="/cart" element={<Cart />} />
<Route path='/profile' element={<Profile />} /> */}

        </Routes>
      </Router>
    </div>
  );
}

export default App;

// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
