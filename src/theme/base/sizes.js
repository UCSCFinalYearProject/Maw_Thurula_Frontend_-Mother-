import {spacing} from './space';

const container = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
};

const sizes = {
  ...spacing,
  ...{
    xs3: 224,
    xs2: 256,
    xs: 320,
    sm: 384,
    md: 448,
    lg: 512,
    xl: 576,
    xl2: 672,
  },
  container,
};

export default sizes;
