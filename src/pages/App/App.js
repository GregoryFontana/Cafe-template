import React, { useState } from "react";
//import logo from "./logo.svg";
import { Routes, Route, Navigate } from "react-router-dom";
import styles from "./App.module.css"
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import NewOrderPage from "../NewOrderPage/NewOrderPage";
import OrderHistoryPage from "../OrderHistoryPage/OrderHistoryPage";


//import LoginForm from "./components/LoginForm";
// import NavBar from "../../components/NavBar";
// import "./App.css";

function App() {
  const [user, setUser] = useState(getUser());
  return (
    <main className={styles.App}>
      {user ? 
        <>
          {/* <NavBar user={user} setUser={setUser} /> */}
          <Routes>
            {/* client-side route that renders the component instance if the path matches the url in the address bar */}
            <Route path="/orders/new" element={<NewOrderPage user={user} setUser={setUser}/>} />
            <Route path="/orders" element={<OrderHistoryPage user={user} setUser={setUser}/>} />
            {/* redirect to /orders/new if path in address bar hasn't matched a <Route> above */}
            <Route path="/*" element={<Navigate to="/orders/new" />} />
          </Routes>
        </>
       : 
        <AuthPage setUser={setUser} />
      }
    </main>
  );
}

export default App;
