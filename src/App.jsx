import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/pages/LoginPage";
import RegisterPage from "./components/pages/RegisterPage";
import ForgetPasswordPage from "./components/pages/ForgetPasswordPage";
import NavigationBar from "./components/NavigationBar";
import Forum from "./components/pages/Forum";
import Home from "./components/pages/Home";
import { auth } from "./config/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useState } from "react";

function App() {
  const [currentUser, setCurrentUser] = useState([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  console.log(currentUser);

  onAuthStateChanged(auth, (user) => {
    if (user) {
      setCurrentUser(user);
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  });

  return (
    <BrowserRouter>
      <NavigationBar
        isLoggedIn={isLoggedIn}
        currentUser={currentUser}
        setIsLoggedIn={setIsLoggedIn}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forum" element={<Forum />} />
        <Route
          path="/login"
          element={
            <LoginPage isLoggedIn={isLoggedIn} currentUser={currentUser} />
          }
        />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/forget-password" element={<ForgetPasswordPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
