import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';
import { filter, switchMap, take, tap } from 'rxjs/operators';
import { catchError } from 'rxjs/operators/catchError';

import * as fromStore from '../store';

@Injectable()
export class ToppingsGuard implements CanActivate {
    constructor(private store: Store<fromStore.ProductsState>) {}

    canActivate(): Observable<boolean> {
        return this.checkStore()
            .pipe(
                switchMap(() => of(true)),
                catchError(() => of(false))
            )
    }

    checkStore(): Observable<boolean> {
        return this.store.select(fromStore.getToppingsLoaded)
            .pipe(
                tap(loaded => {
                    if(!loaded) {
                        this.store.dispatch(new fromStore.LoadToppingsAction());
                    }
                }),
                filter(loaded => loaded),
                take(1)
            );
    }
}
