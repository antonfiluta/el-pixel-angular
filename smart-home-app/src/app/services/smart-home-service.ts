import { computed, effect, inject, Service, signal } from '@angular/core';
import {
  DeviceConfig,
  INITIAL_HOME_STATE,
  SMART_DEVICES,
  SmartHomeState,
} from '../utils/mock-smarthome';
import { MessageService } from 'primeng/api';

@Service()
export class SmartHomeService {
  private messageService = inject(MessageService);

  private _items = signal<DeviceConfig[]>(SMART_DEVICES);
  private _state = signal<SmartHomeState>(INITIAL_HOME_STATE);

  public items = this._items.asReadonly();
  public state = this._state.asReadonly();

  public generalCondition = computed(() => {
    if (this.energyConsumption() === 0) return 'No Electricity';
    if (this.energyConsumption() > 250) return 'High Energy Consumption';
    return 'All is Stable';
  });

  public energyConsumption = computed(() => {
    if (!this.state().isMasterPowerOn) return 0;

    const lightConsumption = this.state().light * 1.5;
    const audioVolumeConsumption = this.state().audioVolume * 0.9;
    const temperatureConsumption = this.state().temperature > 22 ? 200 : 50;

    return lightConsumption + audioVolumeConsumption + temperatureConsumption;
  });

  public toggleEcoMode() {
    this.updateState({
      ecoMode: !this.state().ecoMode,
    });
  }

  public togglePower() {
    const power = this.state().isMasterPowerOn;
    this.updateState({
      isMasterPowerOn: !power,
    });

    this.messageService.add({
      severity: 'success',
      summary: 'Success',
      detail: `The electricity is turned ${!power ? 'On' : 'Off'}`,
      key: 'global',
    });
  }

  public updateDeviceState(id: string, updatedValue: number) {
    const state = this.state();
    const device = this.items().find((item) => item.id === id);

    if (!device) return;

    const type = device.type;

    const min = device.minValue;
    const max = device.maxValue;

    if (!state.isMasterPowerOn) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Warning',
        detail: 'Cannot change settings - power is off',
        key: 'global',
      });
      return;
    }

    if (state.ecoMode && (type === 'climate' || type === 'light')) {
      this.messageService.add({
        severity: 'warn',
        summary: 'Eco Mode',
        detail: `Cannot change ${type} while Eco Mode is on`,
        key: 'global',
      });
      return;
    }

    if (min > updatedValue || max < updatedValue) {
      this.messageService.add({
        severity: 'error',
        summary: 'Error',
        detail: `Value must be between ${min} and ${max}${device.unit}`,
        key: 'global',
      });
      return;
    }

    if (type === 'audio') state.audioVolume = updatedValue;
    if (type === 'light') state.light = updatedValue;
    if (type === 'climate') state.temperature = updatedValue;

    this.updateState(state);
  }

  private updateState(updates: Partial<SmartHomeState>) {
    this._state.update((state) => ({
      ...state,
      ...updates,
    }));
  }

  constructor() {
    effect(() => {
      if (this.state().ecoMode) {
        this.updateState({
          light: 20,
          temperature: 22,
        });
      }
    });

    let previousVolume = 0;
    effect(() => {
      const volume = this.state().audioVolume;

      if (volume > 80 && previousVolume <= 80) {
        this.messageService.add({
          severity: 'warn',
          summary: 'Warning',
          detail: `Music is very loud: ${volume}%. It hurts you.`,
          key: 'global',
        });
      }

      previousVolume = volume;
    });
  }
}
