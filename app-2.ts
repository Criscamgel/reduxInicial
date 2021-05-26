import { decrementadorAction, dividirAction, incrementadorAction, multiplicarAction } from "./contador/contador.actions";
import { Action } from "./ngrx-fake/ngrx";

// Reducer --> Siempre debe regresar un estado
// No interactua con librería externas
function reducer(state = 10, action: Action) {
  switch (action.type) {

    case "INCREMENTAR":
      return (state += action.payload);

    case "DECREMENTAR":
      return (state -= action.payload);

    case "MULTIPLICAR":
      return (state *= action.payload);

    case "DIVIDIR":
      return (state /= action.payload);

    default:
      return state;
  }
}


console.log(reducer(10, incrementadorAction));
console.log(reducer(10, decrementadorAction));
console.log(reducer(6, multiplicarAction));
console.log(reducer(13, dividirAction));
