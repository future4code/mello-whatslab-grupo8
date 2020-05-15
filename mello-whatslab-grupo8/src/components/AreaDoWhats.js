import React from 'react'
import styled from 'styled-components'

const WhatsContainer = styled.div`
    border: solid black 1.5px;
    height: 100vh;
    width: 40vw;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    background-color: tomato;
`


function WhatsArea(props) {
    return (
        <WhatsContainer>
            {props.children}
        </WhatsContainer>
    )
}


export default WhatsArea