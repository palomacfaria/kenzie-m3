import { useEffect, useRef } from "react";

export const useKeydown = (keyId, callback) => {
    const ref = useRef(null);

    useEffect(() => {
  
      const handleKeydown = (event) => {
          if(event.key === keyId){
            if(callback) callback(ref.current);
          }
      }
  
      window.addEventListener("keydown", handleKeydown);
  
      return() => {
          window.removeEventListener("keydown", handleKeydown);
      }
    }, []);

    return ref;
}