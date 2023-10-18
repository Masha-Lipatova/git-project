import { useEffect, useState } from "react";

export const useLocalStorage = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    let value = JSON.parse(window.localStorage.getItem(key)) || defaultValue;
    if (defaultValue === undefined) {
      defaultValue = "";
    }
    try {
      value = JSON.parse(window.localStorage.getItem(key)) || defaultValue;
    } catch (err) {
      value = " ";
    }

    return value;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state)); 
  }, [state]);

  return [state, setState];
};