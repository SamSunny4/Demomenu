'use client';

import { ThemeProvider } from '../components/ThemeContext';
import DeviceGate from '../components/DeviceGate';

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <DeviceGate>{children}</DeviceGate>
    </ThemeProvider>
  );
}
