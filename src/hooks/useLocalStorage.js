import { useState, useEffect, useCallback, useRef } from 'react';

export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const valueRef = useRef(storedValue);
  valueRef.current = storedValue;

  useEffect(() => {
    try {
      window.localStorage.setItem(key, JSON.stringify(storedValue));
    } catch (e) {
      console.error(e);
    }
  }, [key, storedValue]);

  const setValue = useCallback((value) => {
    setStoredValue(prev => {
      const next = value instanceof Function ? value(prev) : value;
      valueRef.current = next;
      return next;
    });
  }, []);

  const removeValue = useCallback(() => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
      valueRef.current = initialValue;
    } catch (e) {
      console.error(e);
    }
  }, [key, initialValue]);

  return [storedValue, setValue, removeValue];
}
