import styled from 'styled-components'

export const Container = styled.div`
    width: 100%;
`

export const SelectArea = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-around;
    margin-top 20px;

    button {
        background: none;
        border: none;
    }
`

export const Content = styled.div`
    margin-top: 15px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content:center;
`

export const Title = styled.div`
    margin-top: -35px;
    width:100%;
    border-bottom: 1px solid #20295F;
    display: flex;
    justify-content:center;

        h3{
            color: #20295F;
            position: relative;
            top:30px;
            background:#fff;
            padding:0 20px;
        }
`