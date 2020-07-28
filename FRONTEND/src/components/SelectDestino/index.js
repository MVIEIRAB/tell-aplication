import React from 'react'
import * as S from './styles'
import { dataDestino } from '../../client/destino/index'

class Destino extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }

    render() {
        return (
            <S.Select onChange={(e)=>this.props.handle(e.target.value)}>
                <option>Selecione o Destino</option>
                {dataDestino.map((item) => { return (<option value={item}>{item}</option>) })}
            </S.Select>
        )
    }
};

export default Destino