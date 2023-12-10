import { useEffect, useState } from "react";

function App() {

  const [adress, setAdress] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const loadData = async() => {
      const response = await fetch("⁠https://viacep.com.br/ws/01001000/json/");
    }
  }, []);

  return (
    <>
      
    </>
  )
}

export default App;
