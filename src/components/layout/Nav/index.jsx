import * as S from '../../../styled-components/App.styles';

const Nav = () => {
  return (
    <S.Nav>
      <ul>
        <li>
        <S.Link to="/">Home</S.Link>
        </li>
        <li>
        <S.Link to="about">About</S.Link>
        </li>
      </ul>
    </S.Nav>
  )
}

export default Nav;