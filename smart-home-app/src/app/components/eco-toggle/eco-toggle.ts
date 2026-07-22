import { Component, model } from '@angular/core';

@Component({
  selector: 'app-eco-toggle',
  standalone: true,
  imports: [],
  templateUrl: './eco-toggle.html',
  styleUrls: ['./eco-toggle.css'],
})
export class EcoToggle {
  public isEcoMode = model<boolean>(false);

  protected toggleEcoMode() {
    this.isEcoMode.update((v) => !v);
  }
}
