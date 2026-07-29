import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>Меню пицц</h2>
    <ul>
      @for (pizza of pizzas; track pizza.id) {
        <li>
          <a [routerLink]="['/pizza', pizza.id]"> {{ pizza.name }} — {{ pizza.price }} ₽ </a>
        </li>
      }
    </ul>
  `,
})
export class Menu {
  pizzas = [
    { id: 1, name: 'Маргарита', price: 450 },
    { id: 2, name: 'Пепперони', price: 550 },
    { id: 3, name: 'Четыре сыра', price: 600 },
  ];
}
