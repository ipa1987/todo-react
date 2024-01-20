// src/custom-theme.ts

import { extend } from '@syncfusion/ej2-base';

// Your Material-UI palette definitions
const muiPalette = {
  mode: 'dark',
  primary: {
    light: 'rgba(168,85,247,.80)',
    main: 'rgba(168,85,247,.65)',
    dark: 'rgba(168,85,247,.28)',
  },
  background: {
    paper: '#151515',
    default: 'rgba(0,0,0,.96)',
  },
  // ... other palette definitions
};

// Create Syncfusion custom theme
const customSyncfusionTheme = extend({}, {
  // Syncfusion-specific theme properties
  // For example, you can define color and other properties here
}, {
  // Your Material-UI colors mapped to Syncfusion theme
  mode: muiPalette.mode,
  primary: {
    light: muiPalette.primary.light,
    main: muiPalette.primary.main,
    dark: muiPalette.primary.dark,
  },
  background: {
    paper: muiPalette.background.paper,
    default: muiPalette.background.default,
  },
  /* ... other palette definitions */
});

export { customSyncfusionTheme };
