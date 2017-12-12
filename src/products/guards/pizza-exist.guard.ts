import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import * as fromStore from '../store';
import { tap, take, filter, map, switchMap } from 'rxjs/operators';
import { Pizza } from 'src/products/models/pizza.model';

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
