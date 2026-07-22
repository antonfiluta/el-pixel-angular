import { Component, computed, inject, input } from '@angular/core';
import { DeviceConfig } from '../../utils/mock-smarthome';
import { SmartHomeService } from '../../services/smart-home-service';

@Component({
  selector: 'app-smart-card',
  imports: [],
  templateUrl: './smart-card.html',
  styleUrl: './smart-card.css',
})
export class SmartCard {
  private smartHomeService = inject(SmartHomeService);

  public card = input.required<DeviceConfig>();

  protected homeState = this.smartHomeService.state;

  protected isPowerOn = computed(() => this.homeState().isMasterPowerOn);

  protected value = computed(() => {
    const type = this.card().type;
    const state = this.homeState();

    if (type === 'audio') return state.audioVolume;
    if (type === 'light') return state.light;
    return state.temperature;
  });

  protected updateDevice(value: number) {
    this.smartHomeService.updateDeviceState(this.card().id, this.value() + value);
  }
}
