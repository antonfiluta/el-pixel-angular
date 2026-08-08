import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-orders',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './admin-orders.html',
})
export class AdminOrders {}
