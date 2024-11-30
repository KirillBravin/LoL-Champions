import { useCallback, useState } from "react";

export const useHttp = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [process, setProcess] = useState("waiting");

  const request = useCallback(
    async (
      url: string,
      method: string = "GET",
      body = null,
      headers: Record<string, string> = { "Content-Type": "application/json" }
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
        setLoading(false);
        setError(e.message);
        setProcess("error");

        if (e instanceof Error) {
          console.error(e.message);
        }
        throw e;
      }
    },
    []
  );

  return { request, loading, error, process };
};
