import { defaultVector } from '../core/defaults';
const defaultProps = {
  acceleration: defaultVector,
  direction: 0,
  location: defaultVector,
  desiredLocation: null,
  size: 30,
  velocity: defaultVector,
};
const createBoid = (props = {}) => Object.assign({}, defaultProps, props);

export { createBoid };