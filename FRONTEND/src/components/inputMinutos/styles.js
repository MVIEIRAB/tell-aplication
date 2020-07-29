import styled from 'styled-components'

export const Input = styled.input`

    width: 192px;
    height: 20px;
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

      @media (max-width: 1070px) {
        margin:3%;
    }
`