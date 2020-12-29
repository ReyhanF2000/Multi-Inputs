import React, { useState } from 'react'
import styled from 'styled-components'
import MultiInput from './MultiInput'

const Wrapper = styled.div`
text-align:center
`
const Title = styled.h1``

export default function Page() {
    const [state, setState] = useState([{ id: '0', value: '', flag: false }])

    function handleInputChange(id, event) {
        const target = event.target
        const value = target.value
        const copyState = [...state]
        const index = copyState.findIndex(item => item.id === id)
        copyState[index].value = value
        if (copyState[index].value !== '' && !copyState[index].flag) {
            pushItem(index, copyState)
        }
        else if (copyState[index].value === '' && copyState[index].flag && copyState.length !== 1) {
            copyState.splice(index, 1)
            setState(copyState)
        }
        else {
            setState(copyState)
        }
    }

    function pushItem(index, copyState) {
        copyState[index].flag = true
        const randomId = (Math.floor(Math.random() * 10000000)).toString()
        copyState.push({ id: randomId, value: '', flag: false })
        return setState(copyState)
    }

    function handleRemove(id) {
        const copyState = [...state]
        const index = copyState.findIndex(item => item.id === id)
        if (index === copyState.length - 1 && copyState.length > 1) {
            copyState[copyState.length - 2].flag = false
        }
        if (copyState.length !== 1) {
            copyState.splice(index, 1)
            setState(copyState)
        }
    }

    return (<Wrapper>
        <Title>MultyInputs...</Title>
        {state.map(item =>
            <MultiInput
                key={item.id}
                value={item.value}
                onInputChange={(e) => handleInputChange(item.id, e)}
                onClickRemove={() => handleRemove(item.id)}
            />
        )}
    </Wrapper>)
}