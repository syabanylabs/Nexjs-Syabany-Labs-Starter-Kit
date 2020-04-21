import { 
  White, 
  GreenPrimary, 
  GrayPrimary,
  GrayLight
} from './colors.styles'


const fontWeight = {
     thin: '100',
    light: '300',
  regular: '400',
     bold: '700',
    black: '900'
}

const size = {
      caption: 12,
  
         body: 14,
   mediumBody: 15,
  
        title: 18,
  mediumTitle: 24,
   largeTitle: 38,
}


const fontSize = {
      caption: `font-size: ${size.caption}px`,

         body: `font-size: ${size.body}px`,
   mediumBody: `font-size: ${size.mediumBody}px`,
  
        title: `font-size: ${size.title}px`,
  mediumTitle: `font-size: ${size.mediumTitle}px`,
   largeTitle: `font-size: ${size.largeTitle}px`,
}

const lineHeight = (value) => {
  return `line-height: ${value * 2 - 2}px`
}


const fontStyle = {
  captionPrimary: `
    ${fontSize.caption};
    color: GrayLight;
    text-align: left;
    font-weight: ${fontWeight.regular};
    ${lineHeight(size.caption)};
  `,

  bodyPrimary: `
    ${fontSize.body};
    color: ${GrayPrimary};
    text-align: left;
    font-weight: ${fontWeight.regular};
    ${lineHeight(size.caption)};
  `
}

export {
  fontWeight,
  fontSize,
  fontStyle,
  lineHeight
}