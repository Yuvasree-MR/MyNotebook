import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import NoteState from './context/notes/NoteState';
import Alert from './Components/Alert';
import Login from './Components/Login';
import Singup from './Components/Singup';

function App() {
  return (
    <>
    <NoteState>
      <Router>
        <Navbar/>
        <Alert message="This is a Alert"/>
        <div className="container">
        <Routes>
          <Route exact path='/' element= {<Home/>}></Route>
          <Route exact path='/about' element= {<About/>}></Route>
          <Route exact path='/login' element= {<Login/>}></Route>
          <Route exact path='/singup' element= {<Singup/>}></Route>
        </Routes>
        </div>
      </Router>
    </NoteState>
    </>
  );
}

export default App;
