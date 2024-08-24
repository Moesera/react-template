
import * as S from "../../styled-components/App.styles";

const Home = () => {

  return (
      <>
      <h1>Basic starter template</h1>
      <S.CustomContainer $direction="column" $margin="0 auto" $maxWidth="70%">
        <h2>Template Includes:</h2>
        <ul>
          <li>Styled-components & basic setup</li>
          <li>React-router-dom</li>
          <li>Redux/toolkit (easy to switch for another option)</li>
          <li>Layout folder & file setup</li>
          <li>Basic folder setup</li>
          <li>babel styled components plugin and config</li>
        </ul>
      </S.CustomContainer>

      <S.CustomContainer $direction="column" $margin="0 auto" $maxWidth="70%">
        <p>
        Theme is setup to work properly, you can change colors in <strong>src\styled-components\GlobalStyle.jsx</strong><br></br>
        In variables.js you can change fallback colors, transitions and screen sizes.
        </p>
        <p><strong>Enjoy!</strong></p>
      </S.CustomContainer>
    </>
  )
}

export default Home;