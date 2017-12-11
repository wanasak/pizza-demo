import { Action } from "@ngrx/store";
import { Observable } from "rxjs/Rx";
import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { map, switchMap, catchError } from "rxjs/operators";

import { Pizza } from "../../models/pizza.model";
import { PizzasService } from "../../services";
import * as pizzaActions from "../actions/pizzas.action";

@Injectable()
export class PizzaEffects {
  constructor(private actions$: Actions, private pizzaService: PizzasService) {}

  @Effect()
  loadPizzas$: Observable<Action> = this.actions$
    .ofType(pizzaActions.PizzaActionTypes.LOAD_PIZZAS)
    .pipe(
      switchMap(() => {
        return this.pizzaService
          .getPizzas()
          .pipe(
            map(res => new pizzaActions.LoadPizzaSuccessAction(res)),
            catchError(err => of(new pizzaActions.LoadPizzaFailAction(err)))
          );
      })
    );

  @Effect()
  createPizza$: Observable<Action> = this.actions$
    .ofType(pizzaActions.PizzaActionTypes.CREATE_PIZZA)
    .pipe(
      map((action: pizzaActions.CreatePizzaAction) => action.payload),
      switchMap(pizza => {
        return this.pizzaService
          .createPizza(pizza)
          .pipe(
            map(res => new pizzaActions.CreatePizzaSuccessAction(res)),
            catchError(err => of(new pizzaActions.CreatePizzaFailAction(err)))
          );
      })
    );

  @Effect()
  updatePizza$: Observable<Action> = this.actions$
    .ofType(pizzaActions.PizzaActionTypes.UPDATE_PIZZA)
    .pipe(
      map((action: pizzaActions.UpdatePizzaAction) => action.payload),
      switchMap(pizza => {
        return this.pizzaService
          .updatePizza(pizza)
          .pipe(
            map(res => new pizzaActions.UpdatePizzaSuccessAction(res)),
            catchError(err => of(new pizzaActions.UpdatePizzaFailAction(err)))
          );
      })
    );

  @Effect()
  deletePizza$: Observable<Action> = this.actions$
    .ofType(pizzaActions.PizzaActionTypes.DELETE_PIZZA)
    .pipe(
      map((action: pizzaActions.DeletePizzaAction) => action.payload),
      switchMap(pizza => {
        return this.pizzaService
          .removePizza(pizza)
          .pipe(
            map(() => new pizzaActions.DeletePizzaSuccessAction(pizza)),
            catchError(err => of(new pizzaActions.DeletePizzaFailAction(err)))
          );
      })
    );
}
