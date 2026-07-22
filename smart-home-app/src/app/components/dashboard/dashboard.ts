import { Component, computed, effect, inject, signal } from '@angular/core';
import { SmartHomeService } from '../../services/smart-home-service';
import { SmartCard } from '../smart-card/smart-card';
import { EcoToggle } from '../eco-toggle/eco-toggle';

@Component({
  selector: 'app-dashboard',
  imports: [SmartCard, EcoToggle],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  protected smartHomeService = inject(SmartHomeService);

  protected isPowerOn = computed(() => this.smartHomeService.state().isMasterPowerOn);
  protected isEcoMode = computed(() => this.smartHomeService.state().ecoMode);
}
