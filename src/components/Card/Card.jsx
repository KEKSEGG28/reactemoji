import React from "react";
import s from "./Card.module.scss";
import { dublLetter } from "../../helpers/dublLetter";

export const Card = ({ symbol, title, keywords }) => {
  return (
    <div className={s.card}>
      <h2 className={s.card__emoji}>{symbol}</h2>
      <p className={s.card__title}>{title}</p>
      <p className={s.card__subtitle}>{dublLetter(keywords)}</p>
    </div>
  );
};
