import { createSelector } from "@ngrx/store";

import * as fromRoot from "../../../app/store";
import * as fromFeature from "../reducers";
import * as fromPizzas from "../reducers/pizzas.reducer";
import * as fromToppings from "./toppings.selector";

export const getPizzaState = createSelector(
  fromFeature.getProductsState,
  state => state.pizzas
);

export const getPizzaEntities = createSelector(
  getPizzaState,
  fromPizzas.getPizzasEntities
);
export const getAllPizzas = createSelector(getPizzaEntities, entities => {
  return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
});
export const getPizzasLoading = createSelector(
  getPizzaState,
  fromPizzas.getPizzaLoading
);
export const getPizzasLoaded = createSelector(
  getPizzaState,
  fromPizzas.getPizzaLoading
);
export const getSelectedPizza = createSelector(
  getPizzaEntities,
  fromRoot.getRouterState,
  (entities, router) => {
    return router.state && entities[router.state.params.pizzaId];
  }
);
export const getPizzaVisualise = createSelector(
  getSelectedPizza,
  fromToppings.getToppingEntities,
  fromToppings.getSeletedToppings,
  (pizza, toppingEntities, selectedToppings) => {
    const toppings = selectedToppings.map(id => toppingEntities[id]);
    return {
      ...pizza,
      toppings
    };
  }
)