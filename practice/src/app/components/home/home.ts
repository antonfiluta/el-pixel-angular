import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h1>Добро пожаловать в Pizza Router App!</h1>
    <p>Здесь вы можете выбрать вкусную пиццу и заказать её онлайн</p>
    <a routerLink="/menu">Перейти в меню</a>
  `,
})
export class Home {}
