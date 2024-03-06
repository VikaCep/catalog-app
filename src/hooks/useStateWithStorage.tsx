import { useEffect, useState } from "react";

export default function useStateWithStorage(
  key: string,
  defaultValue: unknown
) {
  // Fetch initial state from localStorage or use default value
  const [storedValue, setStoredValue] = useState(() => {
    const storedItem = localStorage.getItem(key);
    return storedItem ? JSON.parse(storedItem) : defaultValue;
  });

  // Update localStorage whenever state changes
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(storedValue));
  }, [key, storedValue]);

  // Return state and a function to update state
  return [storedValue, setStoredValue];
}
