import React from 'react'
import * as S from './styles'
import { dataOrigem } from '../../client/origem/index'

class Origem extends React.Component {
    constructor(props) {
        super(props)
        this.state = {}
    }


    render() {
        return (
            <S.Select onChange={(e)=>this.props.handle(e.target.value)}>
                <option>Selecione o Origem</option>
                {dataOrigem.map((item) => { return (<option value={item}>{item}</option>) })}
            </S.Select>
        )
    }
};

export default Origem