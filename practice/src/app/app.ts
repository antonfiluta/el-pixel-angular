import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './shared/ui/header/header';
import { Background } from './shared/ui/background/background';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Header, Background],
  templateUrl: './app.html',
})
export class App {}
