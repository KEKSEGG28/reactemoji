import React from "react";
import s from "./Header.module.scss";
import { SearchBar } from "../../ui/SearchBar/SearchBar";

export const Header = ({ searchValue, inputHandler }) => {
  return (
    <div className={s.header}>
      <h1 className={s.header__title}>Emoji Finder</h1>
      <p className={s.header__subtitle}>Find emoji by keywords</p>
      <SearchBar
        placeholder="Emoji search"
        type="text"
        className={s.header__input}
        value={searchValue}
        onChange={inputHandler}
      />
    </div>
  );
};
