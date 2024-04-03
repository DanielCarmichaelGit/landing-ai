import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Dashboard from "./pages/dashboard";
import store from './State-Management/store';
import { Provider } from 'react-redux';
import Header from './components/reusable/Header';
import Profile from "./pages/profile";
import Create from "./pages/create";
import Hosting from "./pages/hosting";

function App() {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));

  useEffect(() => {
    console.log(user);
    if (user) {
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.clear();
    }
  }, [user]);

  const routesAllowedWithoutUser = ["/signup", "/login"]

  const isAuthRoute = routesAllowedWithoutUser.some((endpoint) => endpoint === window.location.pathname);

  useEffect(() => {
    if (!user || !user.token) {
      if (!isAuthRoute) {
        window.location.href = "/landing.html";
      }
    }
  }, [user, isAuthRoute]);

  return (
    <Provider store={store}>
      {user && user.token && <Header setUser={setUser} />}
      <Routes>
        <Route path="/signup" element={<Signup setUser={setUser} />} />
        <Route path="/login" element={<Login setUser={setUser} />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/create" element={<Create />} />
        <Route path="/hosting" element={<Hosting />} />
      </Routes>
    </Provider>
  );
}

function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}

export default AppWrapper;