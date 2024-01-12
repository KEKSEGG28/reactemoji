import React from "react";
import s from "./PaginationSelect.module.scss";
import { useState } from "react";

export const PaginationSelect = ({ selectedPage, setselectedPage }) => {
  return (
    <select
      className={s.selected}
      value={selectedPage}
      onChange={(e) => setselectedPage(e.target.value)}
    >
      <option value={6}>6</option>
      <option value="12">12</option>
      <option value="24">24</option>
      <option value={48}>48</option>
    </select>
  );
};
