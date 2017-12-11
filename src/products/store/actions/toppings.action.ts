import { Topping } from "./../../models/topping.model";
import { Action } from "@ngrx/store";

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum ToppingsActionTypes {
  LOAD_TOPPINGS = "[Toppings] LOAD_TOPPINGS",
  LOAD_TOPPINGS_SUCCESS = "[Toppings] LOAD_TOPPINGS_SUCCESS",
  LOAD_TOPPINGS_FAIL = "[Toppings] LOAD_TOPPINGS_FAIL"
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class LoadToppingsAction implements Action {
  readonly type = ToppingsActionTypes.LOAD_TOPPINGS;
}

export class LoadToppingsSuccessAction implements Action {
  readonly type = ToppingsActionTypes.LOAD_TOPPINGS_SUCCESS;

  constructor(public payload: Topping[]) {}
}

export class LoadToppingsFailAction implements Action {
  readonly type = ToppingsActionTypes.LOAD_TOPPINGS_FAIL;

  constructor(public payload: any) {}
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type ToppingsActions =
  | LoadToppingsAction
  | LoadToppingsSuccessAction
  | LoadToppingsFailAction;
