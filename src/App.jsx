// import { useState } from "react";
import "./App.css";
import "./Components/Navbar";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
        <Sidebar />
        <h1>Hello Anas!</h1>
      </div>
    </>
  );
}

export default App;
