import styled from 'styled-components'

export const Container = styled.div`
    width: 350px;
    height: 230px;
    box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.73);
    border-radius: 10px;
    background: #20295F;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;


    margin:35px;
    margin-top: 60px;

    transition: all 0.3s ease;

    &:hover{
        opacity: 0.95;
    }
`

export const TopCard = styled.div`
    margin-top:-20px;
    font-size: 9px;
    color:white;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`


export const MidCard = styled.div`
    color:white;
    h1{
        font-size: 30px;
    }
`

export const BottomCard = styled.div`
    color: #20295F;
    position: relative;
    top: 10px;
    background:#EE6820;
    padding:0 20px;
    cursor:pointer;

    

    h1{
        font-size: 15px;
    }
`