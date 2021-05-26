interface Action {
  type: string;
  payload?: any; //Parámetros que uno le puede enviar a la acción
}

// Reducer --> Siempre debe regresar un estado
// No interactua con librería externas
function reducer(state = 10, action: Action) {

  switch (action.type) {
    case 'INCREMENTAR':
      return (state += action.payload);

    case 'DECREMENTAR':
      return (state -= action.payload);

    case 'MULTIPLICAR':
      return (state *= action.payload);

    case 'DIVIDIR':
        return (state /= action.payload);

    case 'RESET':
        return (state = 10);
    default:
      return state;
  }


}

// Usar el reducer
const incrementadorAction: Action = {
  type: 'INCREMENTAR',
  payload: 5
};
const decrementadorAction: Action = {
  type: 'DECREMENTAR',
  payload: 3
};
const multiplicarAction: Action = {
  type: 'MULTIPLICAR',
  payload: 2
};

const dividirAction: Action = {
  type: 'DIVIDIR',
  payload: 2
};

const resetAction: Action = {
  type: 'RESET'
};

console.log(reducer(10, incrementadorAction));
console.log(reducer(10, decrementadorAction));
console.log(reducer(6, multiplicarAction));
console.log(reducer(13, dividirAction));
console.log(reducer(13, resetAction));