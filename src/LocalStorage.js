
import { useEffect } from "react";

const useLocalStorage = (key, callback) => {
  useEffect(() => {
    const storedData = JSON.parse(localStorage.getItem(key));

    if (storedData) {
      console.log(`Stored ${key} data:`, storedData);
      callback(storedData);
    }
  }, [key, callback]);
};

export default useLocalStorage;
