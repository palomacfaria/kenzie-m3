import { useState } from "react";
import { UseCard } from "./components/UseCard";
/* import { LoginSection } from "./components/LoginSection";
import { RestrictedSection } from "./components/RestrictedSection"; */

function App() {
/*   const [isLogin, setIsLogin] = useState(false); */


  return (
    <>
     {/*  {!isLogin ? (
        <LoginSection setIsLogin={setIsLogin} />
      ) : (
        <RestrictedSection setIsLogin={setIsLogin} />
      )} */}

      <UseCard email="alex@email.com" name="Alex" status={false}/>
      <UseCard email="alex@email.com" name="Alex" status={true}/>
      <UseCard email="alex@email.com" name="Alex" status={true}/>
    </>
  );
}

export default App;
