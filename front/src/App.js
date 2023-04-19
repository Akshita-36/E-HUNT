import './App.css';
import Home from './pages/Home';
import RegisterPage from './pages/RegisterPage';
import SignInPage from './pages/SignInPage';
import Level1Page from './pages/Level1Page';
import Level2Page from './pages/Level2Page';
import Level3Page from './pages/Level3Page';
import Level4Page from './pages/Level4Page';
import Level5Page from './pages/Level5Page';
import WelcomePage from './pages/WelcomePage';
import EndPage from './pages/EndPage';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import AdminPage from './pages/AdminPage';

function App() {
  return (
      
        <Router>
      
      <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route path='/signin' element={<SignInPage/>} />
      <Route path='/register' element={<RegisterPage/>} />
      <Route path='/level1' element={<Level1Page/>} />
      <Route path='/level2' element={<Level2Page/>} />
      <Route path='/level3' element={<Level3Page/>} />
      <Route path='/level4' element={<Level4Page/>} />
      <Route path='/level5' element={<Level5Page/>} />
      <Route path='/welcome' element={<WelcomePage/>} />
      <Route path='/end' element={<EndPage/>} />
      <Route path='/admin' element={<AdminPage/>} />
      <Route path='/123' element={<div>ANSWER : "Welcome to this page"</div>}/>
      </Routes>
      </Router>
     
    
  );

}

export default App;