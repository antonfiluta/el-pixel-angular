import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  imports: [RouterLink],
  standalone: true,
  templateUrl: './dashboard.html',
})
export class Dashboard {}
