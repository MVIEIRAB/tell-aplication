import styled from 'styled-components'

export const Container = styled.div`
    width: 380px;
    height: 250px;
    box-shadow: -3px 1px 13px -2px rgba(0,0,0,0.73);
    border-radius: 10px;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;


    margin:20px;
    margin-top: 45px;

    cursor:pointer;
    transition: all 0.3s ease;

    &:hover{
        opacity: 0.7;
    }
`

export const TopCard = styled.div`
    margin-top: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const BottomCard = styled.div`
    display: flex;
    margin-top: 20px;
    align-items: center;
    

        h1{
            font-size: 20px;
        }
`