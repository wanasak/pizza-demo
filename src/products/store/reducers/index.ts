import { ProductsState } from './index';
import { ActionReducerMap, createFeatureSelector, createSelector } from '@ngrx/store';

import * as fromPizzas from './pizzas.reducer';

export interface ProductsState {
  pizzas: fromPizzas.PizzaState;
}

export const reducers: ActionReducerMap<ProductsState> = {
  pizzas: fromPizzas.reducer
};

export const getProductsState = createFeatureSelector<ProductsState>('products');

/**
 * Pizza State
 */
export const getPizzaState = createSelector(
  getProductsState,
  state => state.pizzas
)

export const getPizzaEntities = createSelector(getPizzaState, fromPizzas.getPizzasEntities);
export const getAllPizzas = createSelector(
  getPizzaEntities,
  entities => {
    return Object.keys(entities).map(id => entities[parseInt(id, 10)]);
  }
);
export const getPizzasLoading = createSelector(getPizzaState, fromPizzas.getPizzaLoading);
export const getPizzasLoaded = createSelector(getPizzaState, fromPizzas.getPizzaLoading);