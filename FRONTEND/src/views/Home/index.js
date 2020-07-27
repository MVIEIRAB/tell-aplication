import React from 'react'
import * as S from './styles'

import api from '../../services/api'

//MEUS COMPONENTES

import Header from '../../components/Header'
import Footer from '../../components/Footer'
import SelectOrigem from '../../components/SelectOrigem'
import SelectDestino from '../../components/SelectDestino'
import SelectMinutos from '../../components/SelectMinutos'
import Botao from '../../components/Botao'
import Plans from '../../components/Plans'

function Home() {
    return (
        <S.Container>
        <Header />
        
        <S.SelectArea>

        <SelectOrigem title="DDD Origem"/>
        <SelectDestino title="DDD Destino"/>
        <SelectMinutos title="Tempo"/>
        
        <button type="submit">
            <Botao title="CALCULAR"/>
        </button>

        </S.SelectArea>

        <S.Title>
            <h3>PLANOS</h3>
        </S.Title>

        <S.Content>
            <Plans title="FALEMAIS 30"/>
            <Plans title="FALEMAIS 60"/>
            <Plans title="FALEMAIS 120"/>
            <Plans title="CUSTO SEM OS PLANOS"/>
        </S.Content>

        <Footer />
        </S.Container>
    )
}

export default Home