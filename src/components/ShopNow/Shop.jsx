import styled from 'styled-components'
import { Streaming } from '../Streaming/Streaming'
import { colors, paddings, global } from '../../assets/base/variables'

const ShopContainer = styled.div`

`

const ShopLink = styled.a`
  background-color: ${colors.cinder};
  opacity: ${global.opacity};
  padding: ${paddings.medium};
  border-radius: ${global.borderRadius};
  color: ${colors.white};
  font-size: 2em;
`

export const Shop = () => {
  return (
    <ShopContainer>
      <ShopLink href='#'>COMPRE AGORA</ShopLink>
      
      <div>
        <span>DISPONÍVEL TAMBÉM NAS PLATAFORMAS DIGITAIS</span>
        <Streaming />
      </div>
    </ShopContainer>
  )
}