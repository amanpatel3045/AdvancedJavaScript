import "./styles.css";
import React, { useCallback, useState } from "react";
import ChildA from "./Components/ChildA";
export default function App() {
  const [add, setAdd] = useState(0);
  const Learning = useCallback(() => {}, []);
  return (
    <div className="App">
      <h1>ADD : {add}</h1>
      <ChildA Learning={Learning}/>
      <button onClick={()=>{setAdd(add+1)}}>ADD</button>
    </div>
  );
}
