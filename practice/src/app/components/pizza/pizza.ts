import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-pizza',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>Вы выбрали пиццу №{{ pizzaId }}</h2>
    <p>Здесь могла бы быть подробная информация о пицце (ингредиенты, фото, отзывы)</p>
    <a routerLink="/menu">⬅ Назад в меню</a>
  `,
})
export class Pizza implements OnInit {
  private route = inject(ActivatedRoute);
  pizzaId: string | null = null;

  ngOnInit() {
    this.pizzaId = this.route.snapshot.paramMap.get('id');
  }
}
