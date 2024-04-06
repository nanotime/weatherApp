import { useEffect, useState } from 'react';

const useUserLocales = () => {
  const [userLocales, setUserLocales] = useState<string[] | readonly string[]>(
    navigator.languages && navigator.languages.length
      ? navigator.languages
      : [navigator.language]
  );

  useEffect(() => {
    const handleChange = () => {
      setUserLocales(navigator.languages || [navigator.language]);
    };

    window.addEventListener('languagechange', handleChange);

    return () => {
      window.removeEventListener('languagechange', handleChange);
    };
  }, []);

  return userLocales;
};

export default useUserLocales;
