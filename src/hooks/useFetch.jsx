import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErroMessage] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((err) => setErroMessage(err.message))
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);
  return [data, isLoading, errorMessage];
};
