import React from "react";
import { Container } from "../Container/Container";

import s from "../Main/Main.module.scss";

export const Main = ({ dataSymbol }) => {
  return (
    <div className={s.main}>
      <Container dataSymbol={dataSymbol} />
    </div>
  );
};
