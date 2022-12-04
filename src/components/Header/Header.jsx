import styled from 'styled-components'
import { colors, paddings } from '../../assets/base/variables'
import logo from '../../assets/images/humberto-logo-white.png'
import { Menu } from './Menu'
import { Midia } from '../Midia/Midia'
import { menu } from '../../assets/base/icons'

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

const MenuIcon = styled.button`
  display: none;
  background-color: transparent;
  cursor: pointer;

  svg {
    width: 32px;
  }

  @media(max-width: 940px) {
    display: flex;
  }
`

export const Header = () => {
  return (
    <HeaderContainer>
      <LogoHG src={logo} alt='Logo HG' />
      <Menu />
      <Midia />
      <MenuIcon>{menu}</MenuIcon>
    </HeaderContainer>
  )
}