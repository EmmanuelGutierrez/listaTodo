import { useEffect, useReducer } from "react";

function useLocalStorage(itemName, initialValue) {
  /* const [items, setItem] = useState(initialValue);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [sincronizedItem, setSincronizedItem] = useState(true); */

  const [state, dispatch] = useReducer(reducer, initialState({ initialValue }));

  const { error, loading, sincronizedItem, items } = state;
  console.log(items);
  const onError = (error) =>
    dispatch({ type: actionTypes.error, payload: error });
  const onSuccess = (items) =>
    dispatch({ type: actionTypes.success, payload: items });
  const onSave = (items) =>
    dispatch({ type: actionTypes.save, payload: items });

  const onSinc = () => dispatch({ type: actionTypes.sinc });

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
        onSuccess(parsedItems);
        /* setItem(parsedItems);
        setLoading(false);
        setSincronizedItem(true); */
      } catch (error) {
        /* setError(true); */
        onError(error);
      }
    }, 1500);
  }, [sincronizedItem]);

  const saveItem = (newItems) => {
    try {
      const stringifyItems = JSON.stringify(newItems);
      localStorage.setItem(itemName, stringifyItems);
      onSave(newItems);
    } catch (error) {
      onError(error);
    }
  };

  const sincItem = () => {
    onSinc();
  };

  //return [items, saveItem];
  return {
    items,
    saveItem,
    loading,
    error,
    sincItem,
  };
}

const initialState = ({ initialValue }) => ({
  sincronizedItem: true,
  loading: true,
  error: false,
  items: initialValue,
});

const actionTypes = {
  error: "ERROR",
  success: "SUCCESS",
  save: "SAVE",
  sinc: "SINC",
};

const reducerObject = (state, payload) => ({
  [actionTypes.error]: {
    ...state,
    error: true,
  },
  [actionTypes.success]: {
    ...state,
    error: false,
    loading: false,
    sincronizedItem: true,
    items: payload,
  },
  [actionTypes.save]: {
    ...state,
    items: payload,
  },
  [actionTypes.sinc]: {
    ...state,
    sincronizedItem: false,
    loading: true,
  },
});

const reducer = (state, action) => {
  return reducerObject(state, action.payload)[action.type] || state;
};

export { useLocalStorage };
