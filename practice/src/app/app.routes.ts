import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Menu } from './components/menu/menu';
import { Pizza } from './components/pizza/pizza';
import { Contacts } from './components/contacts/contacts';
import { FormPage } from './components/form-page/form-page';
import { NotFound } from './components/not-found/not-found';
import { Weather } from './components/weather/weather';
import { Counter } from './ngrx/counter/counter';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
  { path: 'home', component: Home, title: 'Главная' },
  { path: 'menu', component: Menu, title: 'Меню' },
  { path: 'pizza/:id', component: Pizza, title: 'Пицца' },
  { path: 'contacts', component: Contacts, title: 'Контакты' },
  { path: 'form', component: FormPage, title: 'Заказ' },
  {
    path: 'admin',
    loadChildren: () =>
      import('./admin/admin.routes').then((m) => m.adminRoutes),
  },
  { path: 'counter', component: Counter, title: 'Cчетчик' },
  { path: 'weather', component: Weather, title: 'Погода' },
  { path: '404', component: NotFound, title: 'Страница не найдена' },
  { path: '**', redirectTo: '404' },
];
