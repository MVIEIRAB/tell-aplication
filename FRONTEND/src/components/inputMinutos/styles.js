import styled from 'styled-components'

export const Input = styled.input`
    width: 200px;
    height: 25px;
    background: #20295F;
    justify-content: start;
    color:#fff;
    border-radius: 10px;
    display: flex;
    text-align: left;
    ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
        color: white;
        opacity: 1; /* Firefox */
        text-align: left;
      }
`