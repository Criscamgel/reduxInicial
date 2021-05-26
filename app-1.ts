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
    
        default:
            return state;
    }
  
  }
  
  // Usar el reducer
  const incrementadorAction: Action = {
    type: 'INCREMENTAR',
    payload: 5
  };
  
  console.log(reducer(10, incrementadorAction));
  