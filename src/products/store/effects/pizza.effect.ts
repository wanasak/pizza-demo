import { Injectable } from "@angular/core";
import { Actions, Effect } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import { map, switchMap, catchError } from "rxjs/operators";

import { Pizza } from "../../models/pizza.model";
import { PizzasService } from "../../services";
import * as pizzaActions from "../actions/pizza.action";

@Injectable()
export class PizzaEffects {
  constructor(private actions$: Actions, private pizzaService: PizzasService) {}

  @Effect()
  loadPizzas$ = this.actions$
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
}
