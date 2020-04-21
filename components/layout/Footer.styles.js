import styled from 'styled-components'

// Common Style
import { 
  White,
  GreenPrimary,
  GrayPrimary,
  GrayLight,
  GrayVeryLight
} from '../commons/styles/colors.styles'
import { fontStyle, fontWeight } from '../commons/styles/fonts.styles'

// Styles
const Wrapper = styled.div`
  position: absolute;
  bottom:0;
  background-color: ${White};
  width: 100%;
  height: 100px;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 50% 50%;
  box-sizing: border-box;
`

const Copyright = styled.p`
  ${fontStyle.bodyPrimary}
  color: ${GreenPrimary};
  display: flex;
  align-items: center;

  .__whole {
    color: ${GrayLight};
  }
`

const Nav_List = styled.ul`
  display: flex;

  li{
    padding-left: 30px;

    &:first-child{
      padding-left: 0px;
    }
  }
`

const Nav_Wrapper = styled.nav`
  display: flex;
  justify-content: right;
  align-items: center;
`

const Nav_Link = styled.a`
  ${fontStyle.bodyPrimary}
  color: ${GrayLight};

  &:hover{
    color: ${GreenPrimary};
  }
`

export {
  Wrapper,
  Nav_Wrapper,
  Nav_List,
  Nav_Link,
  Copyright
}