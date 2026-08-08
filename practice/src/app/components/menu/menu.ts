import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './menu.html',
})
export class Menu {
  protected pizzas = [
    { id: 1, name: 'Маргарита', price: 450 },
    { id: 2, name: 'Пепперони', price: 550 },
    { id: 3, name: 'Четыре сыра', price: 600 },
  ];
}
