import styled from 'styled-components'
import { colors, paddings } from '../../assets/base/variables'
import logo from '../../assets/images/humberto-logo-white.png'
import { Menu } from './Menu.component'
import { Midia } from '../Midia/Midia.component'
import { MenuMobile } from './MenuMobile.component'


const HeaderContainer = styled.header`
  background-color: ${colors.cinder};
  padding: ${paddings.medium};
  color: ${colors.white};
  display: flex;
  align-items: center;
  justify-content: space-between;

  a {
    color: currentColor;
  }
`

const LogoHG = styled.img`
  width: 164px;
`



export const Header = () => {
  return (
    <HeaderContainer>
      <LogoHG src={logo} alt='Logo HG' />
      <Menu />
      <Midia />
      <MenuMobile />
    </HeaderContainer>
  )
}