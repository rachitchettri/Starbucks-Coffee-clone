import { useState } from "react";
import "./App.css";
import Navbar from "./assets/component/Navbar";
import Hero from "./assets/component/Hero";
import Hero_2 from "./assets/component/Hero_2";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
      <Navbar />
      <Hero />
      <Hero_2/>
    </>
  );
}

export default App;
