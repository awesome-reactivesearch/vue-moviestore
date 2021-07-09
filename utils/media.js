import { css } from '@emotion/css';

export const breakpoints = {
  // Numerical values will result in a max-width query
  xsmall: 420,
  small: 576,
  medium: 768,
  large: 992,
  xlarge: 1200,
};

// to maintain max width queries in order
// according to spec ignore xsmall
export const breakPointsOrder = ['xlarge', 'large', 'medium', 'small'];

const media = Object.keys(breakpoints).reduce((acc, label) => {
  const prefix = typeof breakpoints[label] === 'string' ? '' : 'max-width:';
  const suffix = typeof breakpoints[label] === 'string' ? '' : 'px';
  const accumulator = acc;
  accumulator[label] = cls => css`
    @media (${prefix + breakpoints[label] + suffix}) {
      ${cls};
    }
  `;
  return accumulator;
}, {});

// media queries for object styles
export const mediaKey = Object.keys(breakpoints).reduce(
  (acc, label) => ({
    ...acc,
    [label]: `@media (max-width: ${breakpoints[label]}px)`,
  }),
  {},
);

export default media;
