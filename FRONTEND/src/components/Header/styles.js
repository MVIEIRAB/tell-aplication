import styled from 'styled-components'

export const Container = styled.div`

    width: 100%;
    height: 70px;
    background: #20295F;
    border-bottom: 5px solid #EE6820;

    display: flex;

`

export const LeftSide = styled.div`

    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    padding-left: 10px;

    img {
        width: 130px;
        height: 50px;
    }

`

export const RightSide = styled.div`

    width: 50%;
    height: 70px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    padding-right: 40px;

        a {
            color: white;
            font-weight:bold;
            text-decoration: none;
            font-size: large;

            &:hover{
            color: #EE6820;
            opacity: 0.8;
            }
        }

`