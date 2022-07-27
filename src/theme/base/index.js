import borderWidths from './borders';
import breakpoints from './breakpoints';
import colors from './colors';
import radii from './radius';
import shadows from './shadows';
import sizes from './sizes';
import {spacing} from './space';
import typography from './typography';
import opacity from './opacity';
import fontConfig from './font';
import component from './components';

const MauthurulaTheme = {
  borderWidths,
  breakpoints,
  colors,
  radii,
  ...typography,
  sizes,
  space: spacing,
  shadows,
  opacity,
  fontConfig,
  component
};

export default MauthurulaTheme;
