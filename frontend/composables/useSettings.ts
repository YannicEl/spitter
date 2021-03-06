import { Settings } from 'lib/documents/userDoc';

const defaultSettings: Settings = {
  aggressivePreloading: false,
  wildWasteland: false,
  undoLimit: 5,
  debug: false,
};

const settingsStore = useStorage<Settings>('settings', defaultSettings);

export const useSettings = () => {
  return settingsStore;
};
