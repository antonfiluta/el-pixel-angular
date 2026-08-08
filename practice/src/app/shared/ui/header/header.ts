import { Component } from '@angular/core';
import { NAV_ROUTES } from '../../utils/nav-routes';
import { RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'header[app-header]',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
  protected routes = NAV_ROUTES;
}
