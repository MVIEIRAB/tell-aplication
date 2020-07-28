import React from 'react'
import * as S from './styles'


class Button extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { title, calculation } = this.props
        return (
            <S.Button onClick={() => { calculation() }}>
                {title}
            </S.Button>
        )
    }
}
export default Button