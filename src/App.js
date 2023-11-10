import logo from "./logo.svg";
import "./App.css";
import ListUser from "./components/list_user";
import { Routes, Route, Outlet, Link } from "react-router-dom";
import FormCreate from "./components/form_create";

function App() {
  return (
    <div className="container">
      <h1> User Management </h1>
      <Routes>
        <Route path="/" element={<ListUser />} />
        <Route path="/new" element={<FormCreate />} />
      </Routes>
    </div>
  );
}

export default App;
