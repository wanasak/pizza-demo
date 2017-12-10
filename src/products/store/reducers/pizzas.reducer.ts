import { Pizza } from "./../../models/pizza.model";
import * as pizzaAction from "../actions/pizza.action";

export interface PizzaState {
  data: Pizza[];
  loaded: boolean;
  loading: boolean;
}

const initialState: PizzaState = {
  data: [
    {
      name: "Blazin' Inferno",
      toppings: [
        {
          id: 10,
          name: "pepperoni"
        },
        {
          id: 9,
          name: "pepper"
        },
        {
          id: 3,
          name: "basil"
        },
        {
          id: 4,
          name: "chili"
        },
        {
          id: 7,
          name: "olive"
        },
        {
          id: 2,
          name: "bacon"
        }
      ],
      id: 1
    },
    {
      name: "Seaside Surfin'",
      toppings: [
        {
          id: 6,
          name: "mushroom"
        },
        {
          id: 7,
          name: "olive"
        },
        {
          id: 2,
          name: "bacon"
        },
        {
          id: 3,
          name: "basil"
        },
        {
          id: 1,
          name: "anchovy"
        },
        {
          id: 8,
          name: "onion"
        },
        {
          id: 11,
          name: "sweetcorn"
        },
        {
          id: 9,
          name: "pepper"
        },
        {
          id: 5,
          name: "mozzarella"
        }
      ],
      id: 2
    },
    {
      name: "Plain Ol' Pepperoni",
      toppings: [
        {
          id: 10,
          name: "pepperoni"
        }
      ],
      id: 3
    }
  ],
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
      return {
        ...state,
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

export const getPizzaLoading = (state: PizzaState) => state.loading;
export const getPizzaLoaded = (state: PizzaState) => state.loaded;
export const getPizzas = (state: PizzaState) => state.data;