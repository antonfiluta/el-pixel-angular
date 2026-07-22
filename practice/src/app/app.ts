import { Component } from '@angular/core';
import { Home } from './features/homes/home/home';

@Component({
  selector: 'app-root',
  imports: [Home],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {}
