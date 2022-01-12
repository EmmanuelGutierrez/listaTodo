import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const [items, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItems = localStorage.getItem(itemName);
        let parsedItems;
        if (!localStorageItems) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItems = initialValue;
        } else {
          parsedItems = JSON.parse(localStorageItems);
        }
        setItem(parsedItems);
        setLoading(false);
      } catch (error) {
        setError(true);
      }
    }, 2000);
  }, []);

  const saveItem = (newItems) => {
    try {
      const stringifyItems = JSON.stringify(newItems);
      localStorage.setItem(itemName, stringifyItems);
      setItem(newItems);
    } catch (error) {
      setError(true);
    }
  };

  //return [items, saveItem];
  return {
    items,
    saveItem,
    loading,
    error,
  };
}

export { useLocalStorage };
