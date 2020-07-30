import React from 'react'
import * as S from './styles'

import logo from '../../assets/TELZIR.svg'

function Header() {
    return (
        <S.Container>
            <S.LeftSide>
                <img src={logo} alt='logo' />
            </S.LeftSide>
            
            <S.RightSide>
                <a href="#">ÍNICIO</a>
            </S.RightSide>
        </S.Container>
    )
}

export default Header