export interface DeviceConfig {
  id: string;
  name: string;
  type: 'light' | 'audio' | 'climate';
  icon: string;
  minValue: number;
  maxValue: number;
  defaultValue: number;
  unit: string;
}

export interface SmartHomeState {
  isMasterPowerOn: boolean;
  ecoMode: boolean;
  light: number;
  audioVolume: number;
  temperature: number;
}

export const SMART_DEVICES: DeviceConfig[] = [
  {
    id: 'light_1',
    name: 'Light',
    type: 'light',
    icon: 'lightbulb',
    minValue: 0,
    maxValue: 100,
    defaultValue: 50,
    unit: '%',
  },
  {
    id: 'audio_1',
    name: 'Musuc',
    type: 'audio',
    icon: 'headphones',
    minValue: 0,
    maxValue: 100,
    defaultValue: 20,
    unit: '%',
  },
  {
    id: 'climate_1',
    name: 'Climate',
    type: 'climate',
    icon: 'sun',
    minValue: 16,
    maxValue: 30,
    defaultValue: 22,
    unit: '°C',
  },
];

// default
export const INITIAL_HOME_STATE: SmartHomeState = {
  isMasterPowerOn: true,
  ecoMode: false,
  light: 50,
  audioVolume: 20,
  temperature: 22,
};
