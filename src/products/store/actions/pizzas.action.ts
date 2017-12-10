import { Pizza } from "./../../models/pizza.model";
import { Action } from "@ngrx/store";

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum PizzaActionTypes {
  LOAD_PIZZAS = "[Pizza] LOAD_PIZZAS",
  LOAD_PIZZA_SUCCESS = "[Pizza] LOAD_PIZZA_SUCCESS",
  LOAD_PIZZA_FAIL = "[Pizza] LOAD_PIZZA_FAIL"
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class LoadPizzasAction implements Action {
  readonly type = PizzaActionTypes.LOAD_PIZZAS;
}

export class LoadPizzaSuccessAction implements Action {
  readonly type = PizzaActionTypes.LOAD_PIZZA_SUCCESS;

  constructor(public payload: Pizza[]) {}
}

export class LoadPizzaFailAction implements Action {
  readonly type = PizzaActionTypes.LOAD_PIZZA_FAIL;

  constructor(public payload: any) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type PizzaActions =
  | LoadPizzasAction
  | LoadPizzaSuccessAction
  | LoadPizzaFailAction;
