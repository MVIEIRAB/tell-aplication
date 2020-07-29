import styled from 'styled-components'

export const Button = styled.button`

    width: 100px;
    height: 26px;
    background-color: #20295F;
    cursor: pointer;
    justify-content: center;
    color: white;
    border-radius: 10px;

    :hover{
        background-color: #EE6820;
        /*CSS 3*/
        border-radius: 10px 0px 10px 0px;
    }

    @media (max-width: 1070px) {
        margin:3%;
    }
`