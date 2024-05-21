import { useCallback } from "react";

export const useHttp = () => {
  const request = useCallback(
    async (
      url: string,
      method: string = "GET",
      body = null,
      headers: Record<string, string> = { "Content-Type": "application/json" }
    ) => {
      try {
        const response = await fetch(url, { method, body, headers });

        if (!response.ok) {
          throw new Error(`Could not fetch ${url}, status: ${response.status}`);
        }

        const data = await response.json();
        return data;
      } catch (e: unknown) {
        if (e instanceof Error) {
          console.error(e.message);
        }
        throw e;
      }
    },
    []
  );

  return { request };
};
