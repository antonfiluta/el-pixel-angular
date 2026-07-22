import { Component, inject } from '@angular/core';
import { SmartHomeService } from '../../services/smart-home-service';

@Component({
  selector: 'app-dashboard',
  imports: [],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  protected smartHomeSerivce = inject(SmartHomeService);
}
