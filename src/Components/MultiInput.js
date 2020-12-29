import React from 'react'
import styled from 'styled-components'
import { FaMinusCircle } from 'react-icons/fa'


const Wrapper = styled.div`
direction:rtl;
display:flex;
width:70vw;
margin:7px auto
`
const Span = styled.span`
padding:5px;
font-size:28px;
`
const Input = styled.input`
margin:5px;
flex-grow:3;
height:28px;
border-radius:8px
`
export default function MultiInput({ value, onInputChange, onClickRemove }) {
    console.log(value.length)
    return (
        <Wrapper>
            {value.length !== 0 && <Span onClick={onClickRemove}>
                <FaMinusCircle color={'red'} />
            </Span>}
            <Input
                type='text'
                name="value"
                value={value}
                onChange={onInputChange}
            ></Input>
        </Wrapper>
    )
}