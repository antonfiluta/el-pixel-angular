import { Component, inject, OnInit, signal } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { PizzaI, PIZZAS } from '../../shared/utils/pizza';

@Component({
  selector: 'app-pizza',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './pizza.html',
})
export class Pizza implements OnInit {
  private route = inject(ActivatedRoute);
  private pizzas = PIZZAS;

  protected pizza = signal<PizzaI | null>(null);

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      const found = this.pizzas.find((p) => p.id === id);
      this.pizza.set(found || null);
    } else {
      this.pizza.set(null);
    }
  }
}
