import { ActionReducerMap } from '@ngrx/store';
import * as pizzaReducer from '../reducers/pizza.reducer';

export interface ProductState {
    pizza: pizzaReducer.State
}

export const reducers: ActionReducerMap<ProductState> = {
    pizza: pizzaReducer.reducer
}