import { useState, useEffect } from "react";
import axios from 'axios'

function App() {
  const [products, setProducs] = useState([])
  useEffect(()=>{
    axios('http://localhost:7070/')
    .then(({data})=>{
    setProducs(data)
    });
        }, []);
  return (
    <>
    {
      products.map((item)=>{
        return <h1>{item.title}</h1>
      })
    }
    </>
  );
}

export default App;
