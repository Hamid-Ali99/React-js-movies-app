/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { fetchApiData } from "./utils/api.ts";

import { useSelector, useDispatch } from "react-redux";
import { getApiConfig } from "./store/homeSlice.ts";

function App() {
  const dispatch = useDispatch();

  const url = useSelector((state: any) => state.home.url);

  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchApiData("/movie/popular").then((res: []) => {
      console.log(res);
      dispatch(getApiConfig(res));
    });
  };

  return (
    <>
      <div>
        Home
        <p>{url?.total_pages}</p>
      </div>
    </>
  );
}

export default App;
