import React from "react";
import s from "./Container.module.scss";
import { Cards } from "../Cards/Cards";

export const Container = ({ dataSymbol }) => {
  return (
    <div className={s.container}>
      <Cards dataSymbol={dataSymbol} />
    </div>
  );
};
