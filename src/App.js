import './App.css';
import Navbar from './components/Navbar';
import Home from './components/rcomp/Home';
import Quiz from  './components/rcomp/Quiz';
import About from  './components/rcomp/About';
import Footer from './components/Footer';
import Contact from './components/rcomp/Contact'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
    <Navbar/>
        <Routes>
          <Route exact path="/" element={<Home/>}/>
          <Route exact path="/Home" element={<Home/>}/>
          <Route exact path="/Quiz" element={<Quiz/>}/>
          <Route exact path="/Contact" element={<Contact/>}/>
          <Route exact path="/About" element={<About/>}/>
        </Routes>
    </Router>
    <Footer/>
    </>
   
  );
}

export default App;
