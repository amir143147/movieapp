// import logo from './logo.svg';
import './App.css';
import Home from './Home';
import { Routes, Route } from "react-router-dom";
import Singlemovie from './Singlemovie';

function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movie/:id" element={<Singlemovie />} />
        <Route path="*" element={<h1>Page not found1 </h1>} />
      </Routes>

    </>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
