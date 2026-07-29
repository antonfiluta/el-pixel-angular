import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-not-found',
  standalone: true,
  imports: [RouterLink],
  template: `
    <h2>404 – Страница не найдена</h2>
    <p>К сожалению, такой страницы нет.</p>
    <a routerLink="/">Вернуться на главную</a>
  `,
})
export class NotFound {}
