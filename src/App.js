import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationBar from './components/NavigationBar';
import Forum from './components/pages/Forum';

function App() {
  return (
   <BrowserRouter>
      <NavigationBar />
      <Routes>
        <Route path="/forum" element={<Forum />}/>
      </Routes>
   </BrowserRouter>
  );
}

export default App;
