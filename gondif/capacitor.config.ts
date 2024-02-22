import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'gondif',
  webDir: 'public',
  server: {
    androidScheme: 'https'
  }
};

export default config;
