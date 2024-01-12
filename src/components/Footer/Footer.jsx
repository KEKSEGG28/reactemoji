import React from "react";
import s from "./Footer.module.scss";
import { PaginationSelect } from "../../ui/PagitanionSelect/PaginationSelect";
import { ButtonPage } from "../ButtonPage/ButtonPage";

export const Footer = ({
  selectedPage,
  setselectedPage,
  page,
  setPage,
  setLastPage,
  lastPage,
}) => {
  return (
    <div className={s.footer}>
      <ButtonPage
        page={page}
        setPage={setPage}
        setLastPage={setLastPage}
        lastPage={lastPage}
      />
      <h2 className={s.footer__title}>2022 © Made with love by me</h2>
      <PaginationSelect
        selectedPage={selectedPage}
        setselectedPage={setselectedPage}
      />
    </div>
  );
};
