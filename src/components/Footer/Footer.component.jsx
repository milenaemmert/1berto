import styled from 'styled-components'
import { colors, paddings, gaps } from '../../assets/base/variables'
import estreia from '../../assets/images/estreia-logo.png'
import stereophonica from '../../assets/images/stereophonica-logo.png'
import webdev from '../../assets/images/webdev-logo.png'

const FooterContainer = styled.footer`

  background-color: ${colors.cinder};
  padding: ${paddings.large} 0;
  color : ${colors.white};

  a {
    color : ${colors.white};
  }
`

const Contato = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: ${gaps.low};
  margin-bottom: 40px;

  img {
    width: 180px;
  }
`

const FooterLogos = styled.div`
  display: flex;
  justify-content: center;
  gap: ${gaps.medium};
  text-align: center;

  div {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  img {
    width: 120px;
  }

  @media screen and (max-width: 564px) {
    flex-direction: column;
    align-items: center;
  }
`

export const Footer = () => {
  return (
    <FooterContainer>
      <Contato>
        <span>Contato para shows: 21 3247 2525</span>
        <a href="#">www.estreiaproducoes.com.br</a>
        <a href="">contato@estreiaproducoes.com.br</a>

        <img src={estreia} alt="" />
      </Contato>

      <FooterLogos>
        <div>
          <span>PRODUÇÃO</span>
          <img src={estreia} alt="" />
        </div>
        <div>
          <span>MERCHANDISING</span>
          <img src={stereophonica} alt="" />
        </div>
        <div>
          <span>SITE POR</span>
          <img src={webdev} alt="" />
        </div>
      </FooterLogos>
    </FooterContainer>
  )
}