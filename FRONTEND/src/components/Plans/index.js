import React from 'react'
import * as S from './styles'

class Plans extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }
    render() {
        return (
            <S.Container>
                <S.TopCard>
                    <h1>{this.props.title}</h1>
                </S.TopCard>

                <S.MidCard>
                    <h1>R$ {this.props.result}</h1>
                </S.MidCard>

                <S.BottomCard>
                    <h1>CONTRATE</h1>
                </S.BottomCard>
            </S.Container>
        )
    }
}

export default Plans