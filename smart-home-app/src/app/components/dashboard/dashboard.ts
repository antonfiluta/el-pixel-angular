import { Component, inject } from '@angular/core';
import { SmartHomeService } from '../../services/smart-home-service';
import { SmartCard } from '../smart-card/smart-card';

@Component({
  selector: 'app-dashboard',
  imports: [SmartCard],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  protected smartHomeSerivce = inject(SmartHomeService);
}
