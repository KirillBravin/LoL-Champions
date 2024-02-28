import { useState, useCallback } from "react";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [process, setProcess] = useState("waiting");

  const version: string = "14.4.1";

  const request = useCallback(
    async (
      url: string,
      method: string = "GET",
      body = null,
      headers = { "Content-Type": "application/json" }
    ) => {
      setLoading(true);
      setProcess("loading");

      try {
        const response = await fetch(url, { method, body, headers });

        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }

        const data = await response.json();
      } catch (e: any) {
        setLoading(false);
        setError(e.message);
        setProcess("error");
        throw e;
      }
    },
    []
  );

  const clearError = useCallback(() => {
    setError(null);
    setProcess("loading");
  }, []);

  return { loading, request, error, clearError, process, setProcess };
};
