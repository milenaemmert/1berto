import styled from 'styled-components'
import bg from '../../assets/images/gradient-bg.png'
import NVH from '../../assets/images/naovejoahora-album.png'
import { Shop } from './Shop.component'
import { gaps, global, paddings } from '../../assets/base/variables'


const ShopNowBackground = styled.section`
  background-image: url(${bg});
  background-repeat: no-repeat;
  background-size: cover;
  padding: ${paddings.medium} 0;

  img {
    width: 300px;
  }

  @media screen and (max-width: 1248px) {
    img {
      width: 224px;
    } 
  }


`

const ShopNowContainer = styled.div`
  width: ${global.container};
  margin: 0 auto;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 1350px) {
    flex-direction: column;
    align-items: center;
    gap: ${gaps.large};
  }

  @media screen and (max-width: 640px) {
    width: 320px;
  }
`



export const ShopNow = () => {
  return (
    <ShopNowBackground>
      <ShopNowContainer>

          <Shop />

          <img src={NVH} alt='Álbum' />

      </ShopNowContainer>
    </ShopNowBackground>
  )
}