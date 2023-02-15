import "./styles.css";
import ChildA from './Components/ChildA'

import { useState } from "react";
export default function App() {
const [add,setAdd]=useState(0);
function fun(){
  setAdd(add+1);
}
  return (
    <div className="App">
      <h1>{add}</h1>
      <button onClick={fun}>ADD</button>
    <ChildA/>
    </div>
  );
}
