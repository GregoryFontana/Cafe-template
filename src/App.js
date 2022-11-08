import { useState } from "react";
//import logo from "./logo.svg";
import AuthPage from "./pages/AuthPage";
import NewOrderPage from "./pages/NewOrderPage";
import OrderHistoryPage from "./pages/OrderHistoryPage";
//import LoginForm from "./components/LoginForm";
import { Routes, Route } from "react-router-dom";
import { getUser } from '../src/utilities/users-service';
import NavBar from "./components/NavBar";
import "./App.css";

function App() {
  const [user, setUser] = useState(getUser());
  return (
<main className="App">
{user ? (
  <>
    <NavBar user={user} setUser={setUser}/>
    <Routes>
      <Route path="/orders/new" element={<NewOrderPage />} />
      <Route path="/orders" element={<OrderHistoryPage />} />
    </Routes>
  </>
) : (
  <AuthPage user={user} setUser={setUser}/>
)}
</main>
  );
}

export default App;
