import { Footer } from "../components/Footer/Footer";
import { Header } from "../components/Header/Header";
import { Main } from "../components/Main/Main";
import { Card } from "../components/Card/Card";
import "./styles/global.css";
import { useState, useEffect } from "react";
import { Loader } from "../components/Loader/Loader";

export const App = () => {
  const [selectedPage, setselectedPage] = useState(6);
  const [data, setData] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(0);
  const [lastPage, setLastPage] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const inputHandler = (e) => {
    setSearchValue(e.target.value);
  };
  const dataSymbol = data.map((el) => (
    <Card title={el.title} symbol={el.symbol} keywords={el.keywords} />
  ));
  useEffect(() => {
    // fetch(
    //   `http://api.codeoverdose.space/api/emoji?search=${searchValue}&page=${page}&limit=${selectedPage}`
    // )
    fetch(
      `http://localhost:7002/api/emoji?search=${searchValue}&page=${page}&limit=${selectedPage}`
    )
      .then((response) => response.json())
      // .then((json) => setData(json));
      .then((json) => {
        setData(json.data);
        setLastPage(json.lastPage);
        setIsLoading(false);
      });
  }, [selectedPage, searchValue, page]);
  useEffect(() => setPage(0), [selectedPage, searchValue]);
  return (
    <>
      <Header searchValue={searchValue} inputHandler={inputHandler} />
      {isLoading ? <Loader /> : <Main dataSymbol={dataSymbol} />}

      <Footer
        lastPage={lastPage}
        setLastPage={setLastPage}
        selectedPage={selectedPage}
        setselectedPage={setselectedPage}
        page={page}
        setPage={setPage}
      />
    </>
  );
};
