import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { catchError, map, switchMap } from 'rxjs/operators';
import { ToppingsService } from "../../services";

import * as toppingsAction from '../actions/toppings.action';

@Injectable()
export class ToppingsEffects {
  constructor(
    private actions$: Actions,
    private toppingsService: ToppingsService
  ) {}

  @Effect()
  loadToppings$: Observable<Action> = this.actions$
    .ofType(toppingsAction.ToppingsActionTypes.LOAD_TOPPINGS)
    .pipe(
      switchMap(() => {
        return this.toppingsService
          .getToppings()
          .pipe(
            map(res => new toppingsAction.LoadToppingsSuccessAction(res)),
            catchError(err =>
              of(new toppingsAction.LoadToppingsFailAction(err))
            )
          );
      })
    );
}
