import { Component } from '@angular/core';

@Component({
  selector: 'app-contacts',
  standalone: true,
  template: `
    <h2>Контакты</h2>
    <p>📍 Адрес: ул. Angular, 42</p>
    <p>📞 Телефон: +7 (999) 123-45-67</p>
  `,
})
export class Contacts {}
