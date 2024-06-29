/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { fetchApiData } from "./utils/api.ts";
import { getApiConfig, getGenres } from "./store/homeSlice.ts";
import Header from "./components/header/Header.tsx";
import Footer from "./components/footer/Footer.tsx";
import Home from "./pages/home/Home.tsx";
import Details from "./pages/details/Details.tsx";
import SearchResult from "./pages/home/searchResult/SearchResult.tsx";
import Explore from "./pages/explore/Explore.tsx";
import PageNotFound from "./pages/404/PageNotFound.tsx";

function App() {
  const dispatch = useDispatch();

  const url = useSelector((state: any) => state.home.url);

  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  const fetchApiConfig = () => {
    fetchApiData("/configuration").then((res) => {
      console.log(res);

      const url = {
        backdrop: res.images.secure_base_url + "original",
        poster: res.images.secure_base_url + "original",
        profile: res.images.secure_base_url + "original",
      };

      dispatch(getApiConfig(url));
    });
  };

  const genresCall = async () => {
    const promises = [];
    const endPoints = ["tv", "movie"];
    const allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchApiData(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    console.log(data);
    data.map(({ genres }) => {
      return genres.map((item) => (allGenres[item.id] = item));
    });

    dispatch(getGenres(allGenres));
  };

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:mediaType/:id" element={<Details />} />
        <Route path="/search/:query" element={<SearchResult />} />
        <Route path="/explore/:mediaType" element={<Explore />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
