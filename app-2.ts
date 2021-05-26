import { incrementadorAction } from "./contador/contador.actions";
import { Action } from "./ngrx-fake/ngrx";

  // Reducer --> Siempre debe regresar un estado
  // No interactua con librería externas
  function reducer(state = 10, action: Action) {
    
    switch (action.type) {
        case 'INCREMENTAR':
            return (state += action.payload);
    
        default:
            return state;
    }
  
  }

  console.log(reducer(10, incrementadorAction));