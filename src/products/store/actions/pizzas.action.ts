import { Pizza } from "./../../models/pizza.model";
import { Action } from "@ngrx/store";

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum PizzaActionTypes {
  LOAD_PIZZAS = "[Pizza] LOAD_PIZZAS",
  LOAD_PIZZAS_SUCCESS = "[Pizza] LOAD_PIZZAS_SUCCESS",
  LOAD_PIZZAS_FAIL = "[Pizza] LOAD_PIZZAS_FAIL",
  CREATE_PIZZA = "[Pizza] CREATE_PIZZA",
  CREATE_PIZZA_SUCCESS = "[Pizza] CREATE_PIZZA_SUCCESS",
  CREATE_PIZZA_FAIL = "[Pizza] CREATE_PIZZA_FAIL",
  UPDATE_PIZZA = "[Pizza] UPDATE_PIZZA",
  UPDATE_PIZZA_SUCCESS = "[Pizza] UPDATE_PIZZA_SUCCESS",
  UPDATE_PIZZA_FAIL = "[Pizza] UPDATE_PIZZA_FAIL",
  DELETE_PIZZA = "[Pizza] DELETE_PIZZA",
  DELETE_PIZZA_SUCCESS = "[Pizza] DELETE_PIZZA_SUCCESS",
  DELETE_PIZZA_FAIL = "[Pizza] DELETE_PIZZA_FAIL",
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
  readonly type = PizzaActionTypes.LOAD_PIZZAS_SUCCESS;

  constructor(public payload: Pizza[]) {}
}

export class LoadPizzaFailAction implements Action {
  readonly type = PizzaActionTypes.LOAD_PIZZAS_FAIL;

  constructor(public payload: any) {}
}

export class CreatePizzaAction implements Action {
  readonly type = PizzaActionTypes.CREATE_PIZZA;

  constructor(public payload: Pizza) { }
}

export class CreatePizzaSuccessAction implements Action {
  readonly type = PizzaActionTypes.CREATE_PIZZA_SUCCESS;

  constructor(public payload: Pizza) {}
}

export class CreatePizzaFailAction implements Action {
  readonly type = PizzaActionTypes.CREATE_PIZZA_FAIL;

  constructor(public payload: any) {}
}

export class UpdatePizzaAction implements Action {
  readonly type = PizzaActionTypes.UPDATE_PIZZA;

  constructor(public payload: Pizza) { }
}

export class UpdatePizzaSuccessAction implements Action {
  readonly type = PizzaActionTypes.UPDATE_PIZZA_SUCCESS;

  constructor(public payload: Pizza) {}
}

export class UpdatePizzaFailAction implements Action {
  readonly type = PizzaActionTypes.UPDATE_PIZZA_FAIL;

  constructor(public payload: any) {}
}

export class DeletePizzaAction implements Action {
  readonly type = PizzaActionTypes.DELETE_PIZZA;

  constructor(public payload: Pizza) { }
}

export class DeletePizzaSuccessAction implements Action {
  readonly type = PizzaActionTypes.DELETE_PIZZA_SUCCESS;

  constructor(public payload: Pizza) {}
}

export class DeletePizzaFailAction implements Action {
  readonly type = PizzaActionTypes.DELETE_PIZZA_FAIL;

  constructor(public payload: any) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type PizzaActions =
  | LoadPizzasAction
  | LoadPizzaSuccessAction
  | LoadPizzaFailAction
  | CreatePizzaAction
  | CreatePizzaSuccessAction
  | CreatePizzaFailAction
  | UpdatePizzaAction
  | UpdatePizzaSuccessAction
  | UpdatePizzaFailAction
  | DeletePizzaAction
  | DeletePizzaSuccessAction
  | DeletePizzaFailAction;

