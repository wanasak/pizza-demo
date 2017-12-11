import { NavigationExtras } from "@angular/router";
import { Action } from "@ngrx/store";

/**
 * For each action type in an action group, make a simple
 * enum object for all of this group's action types.
 */
export enum RouterActionTypes {
  GO = "[Router] GO",
  BACK = "[Router] BACK",
  FORWARD = "[Router] FORWARD"
}

/**
 * Every action is comprised of at least a type and an optional
 * payload. Expressing actions as classes enables powerful
 * type checking in reducer functions.
 */
export class GoAction implements Action {
  readonly type = RouterActionTypes.GO;

  constructor(
    public payload: {
      path: any[];
      query?: object;
      extras?: NavigationExtras;
    }
  ) {}
}

export class BackAction implements Action {
  readonly type = RouterActionTypes.BACK;
}

export class ForwardAction implements Action {
  readonly type = RouterActionTypes.FORWARD;
}

/**
 * Export a type alias of all actions in this action group
 * so that reducers can easily compose action types
 */
export type RouterActions = GoAction | BackAction | ForwardAction;
