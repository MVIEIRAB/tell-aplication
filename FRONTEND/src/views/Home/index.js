import React from 'react'
import * as S from './styles'

//MEUS COMPONENTES
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Select from '../../components/Select'
import InputMinutos from '../../components/inputMinutos'
import Button from '../../components/Button'
import Plans from '../../components/Plans'

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
            valueNoPlan: '',
            simulated: false
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
            valueFM30: minutesForPlan.minutesFM30 > 0
                ? (minutesForPlan.minutesFM30 * valueForMinute) + ((minutesForPlan.minutesFM30 * valueForMinute) * 10) / 100
                : 0,

            valueFM60: minutesForPlan.minutesFM60 > 0
                ? (minutesForPlan.minutesFM60 * valueForMinute) + ((minutesForPlan.minutesFM60 * valueForMinute) * 10) / 100
                : 0,

            valueFM120: minutesForPlan.minutesFM120 > 0
                ? (minutesForPlan.minutesFM120 * valueForMinute) + ((minutesForPlan.minutesFM120 * valueForMinute) * 10) / 100
                : 0
        }

        const valueNoPlan = tempo * valueForMinute

        this.setState({ valueForPlan, valueNoPlan, simulated: true })
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

    clearCalc() {
        this.setState({ simulated: false })
    }

    render() {
        const { simulated, valueForPlan, valueNoPlan } = this.state
        return (
            <S.Container>
                <Header />

                <S.SelectArea>
                    <Select class="input-ddd-1" title="DDD Origem" handle={origem => this.handleOrigem(origem)} />
                    <Select data-cy="input-ddd-2" title="DDD Destino" handle={destino => this.handleDestino(destino)} />
                    <InputMinutos data-cy="input-minutes" title="Tempo" handle={tempo => this.handleTempo(tempo)} />
                    <Button data-cy="submit-button" title="CALCULAR" calculation={() => this.calculation()} />
                </S.SelectArea>

                <S.Title>
                    <h3>PLANOS</h3>
                </S.Title>

                {simulated
                    ? <S.Content>
                        <Plans data-cy="result-1" result={valueForPlan.valueFM30.toLocaleString('pt-br', {minimumFractionDigits: 2})} title="FALEMAIS 30" />
                        <Plans data-cy="result-1" result={valueForPlan.valueFM60.toLocaleString('pt-br', {minimumFractionDigits: 2})} title="FALEMAIS 60" />
                        <Plans data-cy="result-1" result={valueForPlan.valueFM120.toLocaleString('pt-br', {minimumFractionDigits: 2})} title="FALEMAIS 120" />
                        <Plans data-cy="result-1" result={valueNoPlan.toLocaleString('pt-br', {minimumFractionDigits: 2})} title="CUSTO SEM OS PLANOS" />
                        <Button title="Limpar" calculation={() => this.clearCalc()} />
                    </S.Content>
                    : ("")}
                <Footer />
            </S.Container>
        )
    }
}

export default Home