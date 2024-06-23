import { useEffect } from "react";
import { fetchApiData } from "./utils/api.ts";

function App() {
  useEffect(() => {
    apiTesting();
  }, []);

  const apiTesting = () => {
    fetchApiData("/movie/popular").then((res: []) => {
      console.log(res);
    });
  };
  return (
    <>
      <div>Home</div>
    </>
  );
}

export default App;
