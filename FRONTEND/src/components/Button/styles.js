import styled from 'styled-components'

export const Button = styled.button`
    width: 104px;
    height: 30px;
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
`