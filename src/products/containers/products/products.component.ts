import { Observable } from 'rxjs/Rx';
import { Store } from '@ngrx/store';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

import { Pizza } from '../../models/pizza.model';
// import { PizzasService } from '../../services/pizzas.service';
import * as fromStore from '../../store';

@Component({
  selector: 'products',
  styleUrls: ['products.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="products">
      <div class="products__new">
        <a
          class="btn btn__ok" 
          routerLink="./new">
          New Pizza
        </a>
      </div>
      <div class="products__list">
        <div *ngIf="!((pizzas$ | async)?.length)">
          No pizzas, add one to get started.
        </div>
        <pizza-item
          *ngFor="let pizza of (pizzas$ | async)"
          [pizza]="pizza">
        </pizza-item>
      </div>
    </div>
  `,
})
export class ProductsComponent implements OnInit {
  // pizzas: Pizza[];
  pizzas$: Observable<Pizza[]>;

  // constructor(private pizzaService: PizzasService) {}
  constructor(private store: Store<fromStore.ProductsState>) { }

  // ngOnInit() {
  //   this.pizzaService.getPizzas().subscribe(pizzas => {
  //     this.pizzas = pizzas;
  //   });
  // }
  ngOnInit() {
    this.pizzas$ = this.store.select(fromStore.getAllPizzas);
    // this.store.dispatch(new fromStore.LoadPizzasAction());
    // this.store.dispatch(new fromStore.LoadToppingsAction());
  }
}
