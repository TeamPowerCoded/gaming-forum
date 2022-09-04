import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import LandingPage from './components/pages/LandingPage'
import LoginPage from './components/pages/LoginPage'
import RegisterPage from './components/pages/RegisterPage'
import ForgetPasswordPage from './components/pages/ForgetPasswordPage'
import HomePage from './components/pages/HomePage'
import NavigationBar from './components/NavigationBar';
import Forum from './components/pages/Forum';


function App() {
  return (
   <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/forum" element={<Forum />}/>
        <Route exact path="/" component={ LandingPage } />
        <Route path="/login" component={ LoginPage } />
        <Route path="/register" component={ RegisterPage } />
        <Route path="/forget-password" component={ ForgetPasswordPage } />
        <Route path="/home" component={ HomePage } />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
