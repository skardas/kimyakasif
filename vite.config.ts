import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
    chunkSizeWarningLimit: 2500,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/three')) return 'three';
          if (id.includes('node_modules')) return 'vendor';
          // Kimya YKS: Units u01 to u10 are TYT (Grades 9 & 10)
          if (/src\/data\/units\/u(0[1-9]|10)/.test(id)) return 'units-tyt';
          // Kimya YKS: Units u11 to u24 are AYT (Grades 11 & 12)
          if (/src\/data\/units\/u(1[1-9]|2[0-4])/.test(id)) return 'units-ayt';
        },
      },
    },
  },
});
