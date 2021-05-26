import { contadorReducer } from './contador/contador.reducer';
import { Reducer } from "./ngrx-fake/ngrx";
//T: Tipo genérico

class Store<T>{

    constructor ( private reducer: Reducer<T>,
                  private state: T){

                  }
    
    getState(){
        return this.state;
    }

    dispatch( action: Action ){
        this.state = this.reducer( this.state, action );
    }

}

const store = new Store( contadorReducer, 10 );


store.dispatch( incrementadorAction );
console.log( store.getState() );
