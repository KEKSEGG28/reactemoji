import React from "react";
import s from "./Cards.module.scss";
// import { Card } from "../Card/Card";
export const Cards = ({ dataSymbol }) => {
  return <div className={s.cards}>{dataSymbol}</div>;
};
