import { Pizza } from "./../../models/pizza.model";
import * as pizzaAction from "../actions/pizza.action";

export interface PizzaState {
  entities: { [id: number]: Pizza }
  loaded: boolean;
  loading: boolean;
}

const initialState: PizzaState = {
  entities: {},
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: pizzaAction.PizzaActions
): PizzaState {
  switch (action.type) {
    case pizzaAction.PizzaActionTypes.LOAD_PIZZAS: {
      return {
        ...state,
        loading: true
      };
    }

    case pizzaAction.PizzaActionTypes.LOAD_PIZZA_SUCCESS: {
      const pizzas = action.payload;
      const entities = pizzas.reduce((entities: { [id: number]: Pizza }, pizza) => {
        return { ...entities, [pizza.id]: pizza }
      }, { ...state.entities }); 

      return {
        ...state,
        loading: false,
        loaded: true,
        entities
      };
    }

    case pizzaAction.PizzaActionTypes.LOAD_PIZZA_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    default: {
      return state;
    }
  }
}

export const getPizzaLoading = (state: PizzaState) => state.loading;
export const getPizzaLoaded = (state: PizzaState) => state.loaded;
export const getPizzasEntities = (state: PizzaState) => state.entities;