import React, { useState } from "react";
import s from "./ButtonPage.module.scss";

export const ButtonPage = ({ page, setPage, setLastPage, lastPage }) => {
  function getArr(current) {
    const arr = [];
    if (current + 2 > lastPage) current = lastPage - 1;
    if (current <= 2) {
      for (let i = 1; i <= (lastPage > 4 ? 5 : lastPage + 1); i++) {
        arr.push(i);
      }
    } else {
      for (let i = current - 2; i < current + 3; i++) {
        arr.push(i);
      }
    }

    const pageRender = arr.map((e) => (
      <button
        key={e}
        className={page + 1 === e ? s.button__blue + " " + s.button : s.button}
        onClick={() => setPage(e - 1)}
      >
        {e}
      </button>
    ));
    return pageRender;
  }

  return (
    <>
      <div className={s.button__div}>
        <button
          className={s.button__first}
          disabled={page === 0 ? true : false}
          onClick={() => setPage(0)}
        >
          First
        </button>
        {getArr(page + 1)}
        <button
          setLastPage={setLastPage}
          onClick={() => setPage(lastPage)}
          className={s.button__last}
          disabled={page === lastPage ? true : false}
        >
          Last
        </button>
      </div>
    </>
  );
};
