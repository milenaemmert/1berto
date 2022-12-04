import ReactDOM from 'react-dom/client'
import App from './app'
import { createGlobalStyle } from 'styled-components'
import { colors, paddings } from './assets/base/variables'
import './assets/base/fonts.css'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 16px;
    font-weight: normal;
    border: none;
  }

  ::selection {
    background-color: #b1afc8aa;
  }

  ol, ul {
    list-style: none;
  }

  a {
    text-decoration: none;
  }

  body {
    background-image: ${colors.bg};
    font-family: 'Shippori Mincho', serif;
  }
`


const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <>
    <GlobalStyle />
    <App />
  </>
)