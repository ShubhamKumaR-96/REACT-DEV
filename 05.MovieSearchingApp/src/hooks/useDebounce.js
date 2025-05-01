import { useEffect, useState } from "react";

const useDebounce = (value, delay) => {
  const [debounceVal, setDebounceVal] = useState(value);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebounceVal(value);
    }, delay);

    return () => {
      clearTimeout(timerId);
    };
  }, [value, delay]);

  return debounceVal;
};

export default useDebounce;
