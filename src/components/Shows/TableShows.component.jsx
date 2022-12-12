import { useState } from 'react'
import styled from 'styled-components'
import { shows } from '../../constants'
import { colors, paddings, global } from '../../assets/base/variables'

const SectionShows = styled.section`
  background-color: ${colors.cinderOpacity};
  border-radius: ${global.borderRadius};
  padding: ${paddings.large};

  h2 {
    font-size: 4em;
  }

  h2, h3 {
    font-weight: bold;
    color: ${colors.cinder};
  }

  a {
    color: ${colors.cinder};
    font-size: .8em;
  }

  a:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 566px) {
    max-width: 320px;
    h2 {
      font-size: 3em;
    }
  }
`

const TdBig = styled.td`
  font-size: 2em;
  font-weight: bold;
  color: ${colors.white};


  @media screen and (max-width: 566px) {
    font-size: 1em;
  }
`

const TdSmall = styled.td`
  color: ${colors.cinder};
  padding: ${paddings.low};
  
  a {
    color: ${colors.cinder};
    font-size: .8em;
  }
  a:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 566px) {
    font-size: 0.8em;
  }
`

const TRow = styled.tr`
  padding-bottom: ${paddings.large};
`

export const TableShows = () => {
  const [showsState, setShowsState] = useState(shows)
  console.log()

  const handleShows = () => {
    console.log(showsState)

    return showsState.map(show => {
      return (
        <table>
          <tbody>
            <TRow>
              <TdBig>{show.date}</TdBig>
              <TdBig>{show.city}</TdBig>
              {show.link ? 
                <TdSmall><a href={show.link} target='_blank'>Compre aqui</a></TdSmall>
                :
                null
              }
            </TRow>

          </tbody>
          <TRow>
            <TdSmall>
              {show.place}
            </TdSmall>
          </TRow>
        </table>
      )
    })
  }

  return (
    <SectionShows>
      <h2>AGENDA</h2>
      <h3>Não vejo a hora</h3>


      {handleShows()}

    </SectionShows>
  )
}