import { Pizza } from "./../../models/pizza.model";
import * as pizzaAction from "../actions/pizza.action";

export interface State {
  data: Pizza[];
  loaded: boolean;
  loading: boolean;
}

const initialState: State = {
  data: [],
  loaded: false,
  loading: false
};

export function reducer(
  state = initialState,
  action: pizzaAction.PizzaActions
): State {
  switch (action.type) {
    case pizzaAction.PizzaActionTypes.LOAD_PIZZAS: {
      return {
        ...state,
        loading: true
      };
    }

    case pizzaAction.PizzaActionTypes.LOAD_PIZZA_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        loading: false,
        loaded: true
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
