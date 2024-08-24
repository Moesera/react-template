import Nav from "../Nav";

import * as S from "../../../styled-components/App.styles";
import { useTheme } from '../../../theme';


const Header = () => {
  const { toggleTheme, mode  } = useTheme();

  return (
    <S.Header>
      {/* Theme switch */}
      <S.CustomWrapper $displayType="flex" $padding="0.5rem 1rem" $justify="flex-end">
        <button onClick={toggleTheme}>{mode}</button>
      </S.CustomWrapper >
      <S.CustomWrapper $displayType="flex" $justify="center" $padding="0.5rem 0rem">
      <S.Logo>Logo</S.Logo>
      </S.CustomWrapper>
      <S.CustomWrapper $padding="0.5rem 0rem">
        <Nav />
      </S.CustomWrapper>
    </S.Header>
  );
};

export default Header;
