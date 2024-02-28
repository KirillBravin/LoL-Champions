import { useState, useCallback } from "react";

export const useHttp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [process, setProcess] = useState<string>("waiting");

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
        setLoading(false);
        return data;
      } catch (e: unknown) {
        if (e instanceof Error) {
          setError(e.message);
        }
        setLoading(false);
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
