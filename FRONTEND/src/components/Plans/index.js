import React from 'react'
import * as S from './styles'

function Plans({title}) {
    return (
        <S.Container>
            <S.TopCard>
                <h1>resultado</h1>
            </S.TopCard>

            <S.BottomCard>
                <h1>{title}</h1>
            </S.BottomCard>
        </S.Container>
    )
}

export default Plans