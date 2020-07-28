import React from 'react'
import * as S from './styles'

class InputMinutes extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <S.Input placeholder='Minutos' onChange={(e) => this.props.handle(e.target.value)} />
        )
    }
}
export default InputMinutes