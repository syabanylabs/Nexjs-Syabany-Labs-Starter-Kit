import { css } from 'styled-components';

const size = {
    mobileS: '280px',
    mobileM: '360px',
    mobileL: '420px',

    tabletS: '480px',
    tabletM: '768px',
    tabletL: '1024px',

    desktopS: '1200px',
    desktopM: '1440px',
    desktopL: '1600px'
}

export const device = {
    mobile: `
      (min-width: ${size.mobileS}) and
      (max-width: ${size.mobileL})
    `,
    tablet: `
      (min-width: ${size.tabletS}) and
      (max-width: ${size.tabletL})
    `,
    desktop: `
      (min-width: ${size.desktopS}) and
      (max-width: ${size.desktopM})
    `,
    
}

export const mobile = inner => css`
  @media ${device.mobile} {
    ${inner};
  }
`;

export const tablet = inner => css`
  @media ${device.tablet} {
    ${inner};
  }
`;

export const desktop = inner => css`
  @media ${device.desktop} {
    ${inner};
  }
`;