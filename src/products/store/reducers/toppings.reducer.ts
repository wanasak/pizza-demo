import { Topping } from "./../../models/topping.model";
import * as toppingsAction from "../actions/toppings.action";

export interface ToppingsState {
  entities: { [id: number]: Topping };
  loading: boolean;
  loaded: boolean;
  selectedToppings: number[];
}

const initialState: ToppingsState = {
  entities: {},
  loading: false,
  loaded: false,
  selectedToppings: []
};

export function reducer(
  state = initialState,
  action: toppingsAction.ToppingsActions
): ToppingsState {
  switch (action.type) {
    case toppingsAction.ToppingsActionTypes.LOAD_TOPPINGS: {
      return {
        ...state,
        loading: true
      };
    }

    case toppingsAction.ToppingsActionTypes.LOAD_TOPPINGS_SUCCESS: {
      const toppings = action.payload;

      const entities = toppings.reduce(
        (entities: { [id: number]: Topping }, topping) => {
          return { ...entities, [topping.id]: topping };
        },
        state.entities
      );

      return {
        ...state,
        entities,
        loading: false,
        loaded: true
      };
    }

    case toppingsAction.ToppingsActionTypes.LOAD_TOPPINGS_FAIL: {
      return {
        ...state,
        loading: false,
        loaded: false
      };
    }

    case toppingsAction.ToppingsActionTypes.VISUALISE_TOPPINGS: {
      const selectedToppings = action.payload;

      return {
        ...state,
        selectedToppings
      }
    }

    default: {
      return state;
    }
  }
}

export const getToppingEntities = (state: ToppingsState) => state.entities;
export const getToppingsLoading = (state: ToppingsState) => state.loading;
export const getToppingsLoaded = (state: ToppingsState) => state.loaded;
export const getSelectedToppings = (state: ToppingsState) => state.selectedToppings;