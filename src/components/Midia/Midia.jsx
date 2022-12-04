import styled from 'styled-components'
import { facebook, instagram, twitter, youtube } from '../../assets/base/icons'
import { gaps } from '../../assets/base/variables'

const MidiaContainer = styled.section`
  width: 164px;
  display: flex;
  justify-content: flex-end;
  gap: ${gaps.low};

  svg {
    width: 24px;
  }

  @media(max-width: 940px) {
    display: none;
  }
`

export const Midia = () => {
  return (
    <MidiaContainer>
      {facebook}
      {instagram}
      {twitter}
      {youtube}
    </MidiaContainer>
  )
}