import { apple, deezer, google, spotify } from '../../assets/base/icons'
import { global, paddings, colors, gaps } from '../../assets/base/variables'
import styled from 'styled-components'

const StreamingContainer = styled.div`
  width: 80%;
  display: flex;
  justify-content: center;
  gap: ${gaps.large};
  background-color: ${colors.cinder};
  padding: ${paddings.large};
  border-radius: ${global.borderRadius};

  svg {
    width: 64px;
  }

  @media screen and (max-width: 1248px) {
    width: 100%;
    svg { 
      width: 32px;
    }
  }
`

export const Streaming = () => {
  return (
    <StreamingContainer>
      <a href="#">{apple}</a>
      <a href="#">{deezer}</a>
      <a href="#">{google}</a>
      <a href="#">{spotify}</a>
    </StreamingContainer>
  )
}