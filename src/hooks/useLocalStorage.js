import { useEffect, useState } from "react";

function useLocalStorage(itemName, initialValue) {
  const [items, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [sincronizedItem, setSincronizedItem] = useState(true);

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
        setSincronizedItem(true);
      } catch (error) {
        setError(true);
      }
    }, 1500);
  }, [sincronizedItem]);

  const saveItem = (newItems) => {
    try {
      const stringifyItems = JSON.stringify(newItems);
      localStorage.setItem(itemName, stringifyItems);
      setItem(newItems);
    } catch (error) {
      setError(true);
    }
  };

  const syncItem = () => {
    setLoading(true);
    setSincronizedItem(false);
  };

  //return [items, saveItem];
  return {
    items,
    saveItem,
    loading,
    error,
    syncItem,
  };
}

export { useLocalStorage };
