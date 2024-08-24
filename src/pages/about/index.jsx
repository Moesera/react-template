import { useState } from "react";

import * as S from "../../styled-components/App.styles";

const About = () => {
  const [count, setCount] = useState(0);
  const [$color, set$color] = useState("red");

  const counter = (prop) => {
    if (prop === "clear") {
      return setCount(0);
    }

    return setCount(count + 1);
  };

  return (
    <>
      <h1>About</h1>
      <S.CustomContainer $direction="column" $margin="0 auto" $maxWidth="70%">
        <h2>Tools:</h2>
        <ul>
          <li>Styled-components & basic setup</li>
          <li>React-router-dom</li>
          <li>Redux/toolkit (easy to switch for another option)</li>
          <li>Layout folder & file setup</li>
          <li>Basic folder setup</li>
          <li>babel styled components plugin and config</li>
        </ul>
      </S.CustomContainer>

      <S.CustomContainer $margin="0 auto" $maxWidth="70%" $align="center" $gap="0.5rem">
        <h2>Basic useState example:</h2>
        <S.CustomWrapper $displayType="flex" $flexgap="0.5rem">
          <button onClick={() => counter("count")}>
            Counter: {count}
          </button>
          <button onClick={() => counter("clear")}>Clear Count</button>
        </S.CustomWrapper>
      </S.CustomContainer>
    </>
  );
};

export default About;