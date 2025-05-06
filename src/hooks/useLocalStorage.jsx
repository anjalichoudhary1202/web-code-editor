import React, { useState, useEffect} from 'react'

const useLocalStorage = (key, initialValue) => {
  const prefixedKey = 'code-editor-' + key;

  const [value, setValue] = useState(() => {
    try {
      const jsonValue = localStorage.getItem(prefixedKey);

      // Fix: avoid parsing "undefined"
      if (jsonValue === null || jsonValue === 'undefined') {
        return typeof initialValue === 'function' ? initialValue() : initialValue;
      }

      return JSON.parse(jsonValue);
    } catch (e) {
      console.error('Failed to parse localStorage key:', prefixedKey, e);
      return typeof initialValue === 'function' ? initialValue() : initialValue;
    }
  });

  useEffect(() => {
    localStorage.setItem(prefixedKey, JSON.stringify(value));
  }, [prefixedKey, value]);

  return [value, setValue];
};
export default useLocalStorage