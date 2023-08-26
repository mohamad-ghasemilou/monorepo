const path = require('path');
import { defineConfig } from 'cypress';
import { nxE2EPreset } from '@nx/cypress/plugins/cypress-preset';

export default defineConfig({
  e2e: nxE2EPreset(__dirname, {
    bundler: 'vite',
    specPattern: path.resolve(__dirname, 'path/to/src/**/*.cy.js'),
  }),
});
