import { Routes } from '@angular/router';
import { Dashboard } from './dashboard/dashboard';
import { AdminOrders } from './admin-orders/admin-orders';

export const adminRoutes: Routes = [
  { path: '', component: Dashboard, title: 'Админка' },
  { path: 'orders', component: AdminOrders, title: 'Заказы' },
];
