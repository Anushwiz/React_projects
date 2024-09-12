import { useState, useEffect } from "react";

export function useLocalStorageState(initialvalue, localStorageKey) {
  const [value, setValue] = useState(function () {
    const storageValue = localStorage.getItem(localStorageKey);
    return storageValue ? JSON.parse(storageValue) : initialvalue;
  });

  useEffect(
    function () {
      window.localStorage.setItem(localStorageKey, JSON.stringify(value));
      console.log(value);
    },
    [value, localStorageKey]
  );

  return [value, setValue];
}
