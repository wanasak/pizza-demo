import { Pizza } from "./../../models/pizza.model";
import * as pizzaAction from "../actions/pizza.action";

export interface PizzaState {
  data: Pizza[];
  loaded: boolean;
  loading: boolean;
}

const initialState: PizzaState = {
  data: [],
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
      const data = action.payload;

      return {
        ...state,
        loading: false,
        loaded: true,
        data
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
export const getPizzas = (state: PizzaState) => state.data;