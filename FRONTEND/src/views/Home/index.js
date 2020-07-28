import React  from 'react'
import * as S from './styles'

//MEUS COMPONENTES
import Header       from '../../components/Header'
import Footer       from '../../components/Footer'
import SelectOrigem from '../../components/SelectOrigem'
import Destino      from '../../components/SelectDestino'
import InputMinutos from '../../components/inputMinutos'
import Button       from '../../components/Button'
import Plans        from '../../components/Plans'

import { plans } from '../../client/planos/index'
import { tablePrice } from '../../client/tablePrice/index'

class Home extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            origem: '',
            destino: '',
            tempo: '',
            price: '',
            result: '-',
            valueForPlan: {},
            valueNoPlan: ''
        }
    }

    calculation = () => {
        const { origem, destino, tempo } = this.state

        let valueForMinute

        tablePrice.map((item) => {
            if (item.origem === origem && item.destino === destino) valueForMinute = item.priceMin
            return valueForMinute
        })

        const minutesForPlan = {
            minutesFM30: tempo - plans.falemais30,
            minutesFM60: tempo - plans.falemais60,
            minutesFM120: tempo - plans.falemais120
        }

        const valueForPlan = {
            valueFM30: minutesForPlan.minutesFM30 > 0 ? ((minutesForPlan.minutesFM30 * valueForMinute) * 10) / 100 : 0,
            valueFM60: minutesForPlan.minutesFM60 > 0 ? ((minutesForPlan.minutesFM60 * valueForMinute) * 10) / 100 : 0,
            valueFM120: minutesForPlan.minutesFM120 > 0 ? ((minutesForPlan.minutesFM120 * valueForMinute) * 10) / 100 : 0
        }

        const valueNoPlan = tempo * valueForMinute

        this.setState({ valueForPlan, valueNoPlan })
    }

    handleOrigem = (value) => {
        this.setState({ origem: value })
    }

    handleDestino = (value) => {
        this.setState({ destino: value })
    }

    handleTempo = (value) => {
        this.setState({ tempo: value })
    }

    render() {
        return (
            <S.Container>
                <Header />

                <S.SelectArea>
                    <SelectOrigem title="DDD Origem"  handle={origem => this.handleOrigem(origem)} />
                    <Destino      title="DDD Destino" handle={destino => this.handleDestino(destino)} />
                    <InputMinutos handle={tempo =>    this.handleTempo(tempo)} title="Tempo" />
                    <Button       title="CALCULAR"    calculation={() => this.calculation()} />
                </S.SelectArea>

                <S.Title>
                    <h3>PLANOS</h3>
                </S.Title>

                <S.Content>
                    <Plans result={this.state.valueForPlan.valueFM30}  title="COM FALEMAIS 30" />
                    <Plans result={this.state.valueForPlan.valueFM60}  title="COM FALEMAIS 60" />
                    <Plans result={this.state.valueForPlan.valueFM120} title="COM FALEMAIS 120" />
                    <Plans result={this.state.valueNoPlan}             title="CUSTO SEM OS PLANOS" />
                </S.Content>
                <Footer />
            </S.Container>
        )
    }
}

export default Home