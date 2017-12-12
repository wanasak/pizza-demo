import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { filter, map, switchMap, take, tap } from 'rxjs/operators';
import { Pizza } from 'src/products/models/pizza.model';

import * as fromStore from '../store';

@Injectable()
export class PizzaExistGuard implements CanActivate {
    constructor(private store: Store<fromStore.ProductsState>) {}
    
    canActivate(
        route: ActivatedRouteSnapshot
    ): Observable<boolean> {
        return this.checkStore()
            .pipe(
                switchMap(() => {
                    const id = parseInt(route.params.pizzaId, 10);
                    return this.hasPizza(id);
                })
            );
    }

    hasPizza(id: number): Observable<boolean> {
        return this.store.select(fromStore.getPizzaEntities)
            .pipe(
                map((entities: { [id:number]: Pizza }) => !!entities[id]),
                take(1)
            )
    }

    checkStore(): Observable<boolean> {
        return this.store.select(fromStore.getPizzasLoaded)
            .pipe(
                tap(loaded => {
                    if (!loaded) {
                        this.store.dispatch(new fromStore.LoadPizzasAction());
                    }
                }),
                filter(loaded => loaded),
                take(1)
            )
    }
}
