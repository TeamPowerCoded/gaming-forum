import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';

function App() {
  return (
   <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route />
      </Routes>
   </BrowserRouter>
  );
}

export default App;
