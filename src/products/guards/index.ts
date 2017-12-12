import { PizzasGuard } from './pizza.guard';
import { PizzaExistGuard } from 'src/products/guards/pizza-exist.guard';

export const guards: any[] = [PizzasGuard, PizzaExistGuard];

export * from './pizza.guard';
export * from './pizza-exist.guard';
