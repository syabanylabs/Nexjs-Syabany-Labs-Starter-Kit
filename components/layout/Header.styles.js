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
  background-color: ${White};
  position: fixed;
  width: 100%;
  height: 100px;
  padding: 0 40px;
  display: grid;
  grid-template-columns: 45% auto 45%;
  box-sizing: border-box;
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
  align-items: center;
`

const Nav_Link = styled.a`
  ${fontStyle.bodyPrimary}

  &:hover{
    color: ${GreenPrimary};
  }
`

const Logo = styled.a`
  margin: auto;
  
  img {
    width: 42px;
  }
  
`

const RHeader_Wrapper = styled.div`
  display: flex;
  justify-content: right;
  align-items: center;

  .__tagline{
    ${fontStyle.bodyPrimary}
    color: ${GrayLight};
    padding-right: 30px;
  }
`

const Language_Wrapper = styled.div`
  cursor: pointer;
  display: flex;
  flex-basis: content;
  width: 140px;
  height: 42px;
  background-color: ${GrayVeryLight};
  border-radius: 100px;
  padding: 8px;
  box-sizing: border-box;

  .__flag{
    height: 100%;
    width: auto;
  }

  .__flag_title{
    ${fontStyle.bodyPrimary}
    display: flex;
    align-items: center;
    padding: 0 10px;
  }
`

export {
  Wrapper,
  Nav_Wrapper,
  Nav_List,
  Nav_Link,
  Logo,
  RHeader_Wrapper,
  Language_Wrapper
}