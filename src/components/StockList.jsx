import { useState, useEffect } from "react";
import finnHub from "../api/finnHub";

export const StockList = () => {
  const [stock, setStock] = useState();
  const [watchList, setWatchList] = useState(["GOOGL", "MSFT", "AMZN"]);

  // empty array => runs everytime the component mounts
  useEffect(() => {
    let isMounted = true;
    const fetchData = async () => {
      const responses = [];
      try {
        const response = Promise.all(
          watchList.map((stock) => {
            return finnHub.get("/quote", {
              params: {
                symbol: stock,
              },
            });
          })
        );
        console.log(response);
        if (isMounted) {
          setStock(response.data);
        }
      } catch (err) {}
    };
    fetchData();

    return () => (isMounted = false);
  }, []);

  return <div>StockList Page</div>;
};
