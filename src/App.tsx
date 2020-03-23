import React from "react";
import { useStore, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./components/Main";
import Pagination from "./components/Pagination";
import Loader from "./components/Loader";
import { setPage, initArchive, goToPage } from "./redux/actions";
import config from "./App.config";

const App: React.FC<{ match: { params: any } }> = ({ match }) => {
  const paged: number =
    typeof match.params.paged !== "undefined" ? match.params.paged : 1;
  const loading: boolean = useSelector(
    (state: { status: { loading: boolean } }) => state.status.loading
  );
  const isValidPage: boolean = useSelector((state: { archive: Items }) => {
    const items: Array<Item> =
      state.archive.filter && state.archive.filter.length
        ? state.archive.filter
        : state.archive.items;
    return (
      !loading &&
      Math.ceil(items.length / config.itemsPerPage) >= state.archive.paged
    );
  });

  const { dispatch } = useStore();

  dispatch(setPage(paged));

  if (loading) {
    dispatch(initArchive(paged));
  } else if (isValidPage) {
    dispatch(goToPage(paged));
  }

  return (
    <>
      <Header />
      {(loading && <Loader />) ||
        (isValidPage && (
          <>
            <Main />
            <Pagination />
          </>
        )) || <Redirect to="/" />}
      <Footer />
    </>
  );
};

export default App;
