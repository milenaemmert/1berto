import { menu, exit } from '../../assets/base/icons'
import styled from 'styled-components'
import { paddings, colors } from '../../assets/base/variables'
import { Midia } from '../Midia/Midia.component'
import { useState } from 'react'

const MenuMobileContainer = styled.ul`
  background-color: ${colors.cinder};
  color: currentColor;

  

  a {
    color: ${colors.white}
  }
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

export const MenuMobile = () => {
  const [menuMobile, setMenuMobile] = useState(false)

  const showMenuMobile = () => {
    if (menuMobile) {
      return (
        <div>
          <li><a href='#'>NÃO VEJO A HORA</a></li>
          <li><a href='#'>AGENDA</a></li>
          <li><a href='#'>CONTATO</a></li>
          <li><a href='#'>LOJA</a></li>
          <Midia />
        </div>
      )
    }
  }

  const handleMenuState = () => {
    setMenuMobile(previous => !previous)
  }

  return (
    <MenuMobileContainer>
      <MenuIcon onClick={handleMenuState}>{menuMobile ? exit : menu}</MenuIcon>
      {showMenuMobile()}
      
    </MenuMobileContainer>

  )
}