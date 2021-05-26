import { Action } from "../ngrx-fake/ngrx";

export const incrementadorAction: Action = {
  type: "INCREMENTAR",
  payload: 5,
};

export const decrementadorAction: Action = {
  type: "DECREMENTAR",
  payload: 3,
};
export const multiplicarAction: Action = {
  type: "MULTIPLICAR",
  payload: 2,
};

export const dividirAction: Action = {
  type: "DIVIDIR",
  payload: 2,
};
