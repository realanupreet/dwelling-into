import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [error, setError] = useState(true);
  const [isPending, setPending] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const abortcont = new AbortController();

    setTimeout(() => {
      fetch(url, { signal: abortcont.signal })
        .then((res) => {
          console.log(res);
          if (!res.ok) {
            throw Error("i cant");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          console.log(data);
          setPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Fetch aborted");
          } else {
            console.log("i cant fetch data due to", err.message);
            setError(err.message);
            setPending(false);
          }
        });
    }, 1000);

    return () => {
      abortcont.abort();
    };
  }, [url]);

  return { data, isPending, error };
};
export default useFetch;
