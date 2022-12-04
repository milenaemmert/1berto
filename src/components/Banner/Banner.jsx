import logo from '../../assets/images/naovejoahora-logo-b&w.png'
import hg from '../../assets/images/humberto-banner.png'
import styled from 'styled-components'
import { paddings, global } from '../../assets/base/variables'

const BannerContainer = styled.section`
  max-width: ${global.container};
  padding: ${paddings.medium} ${paddings.large} 0;
  display: grid;
  grid-template-columns: 40% 60%;
  align-items: center;
  margin: 0 auto;
`

const SmallImage = styled.img`
  z-index: 1;
  
  @media(max-width: 568px) {
    width: 260px;
  }
`

const LargeImage = styled.img`
  width: 90%;
  opacity: 0.8;
`

export const Banner = () => {
  return (
    <BannerContainer>
      <SmallImage src={logo} alt='Logo NVH' />
      <LargeImage src={hg} alt='HG' />
    </BannerContainer>
  )
}