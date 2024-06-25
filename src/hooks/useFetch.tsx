import { useEffect, useState } from "react";
import { fetchApiData } from "../utils/api.ts";
const useFetch = (url: string) => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<any>(null);
  const [error, setError] = useState<any>(null);

  useEffect(() => {
    setLoading("loading...");
    setData(null);
    setError(null);

    fetchApiData(url)
      .then((res) => {
        setLoading(false);
        setData(res);
      })
      .catch((err) => {
        setLoading(false);
        setError("Something went wrong!");
      });
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
