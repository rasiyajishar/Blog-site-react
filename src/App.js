import "./App.css";
import { Route, Routes } from "react-router-dom";
import Blogscreate from "./Components/Blogscreate";
import Blogdetail from "./Components/Blogdetail";
import Bloglist from "./Components/Bloglist";
import { createContext } from "react";
import { useState } from "react";

export const myContext = createContext();

function App() {
  const [post, setPost] = useState([]);
  return (
    <div className="App">
      <myContext.Provider value={{ post, setPost }}>
        <Routes>
          <Route path="/" element={<Blogscreate />} />
          <Route path="/Bloglist" element={<Bloglist />}></Route>
          <Route path="/Blogdetail/:id" element={<Blogdetail />}></Route>
        </Routes>
      </myContext.Provider>
    </div>
  );
}

export default App;
