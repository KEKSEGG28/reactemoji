import React from "react";
import s from "./Loader.module.scss";

export const Loader = () => {
  return (
    <div className={s.lds__hourglass}></div>
    // <div className={s.loader}></div>
  );
};
