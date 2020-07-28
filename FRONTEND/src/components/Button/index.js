import React, {Component} from 'react'
import * as S from './styles'


class Button extends Component {
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