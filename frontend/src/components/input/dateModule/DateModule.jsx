import React, { useContext, } from 'react'
import actionModalContext from '../../../context/actionModal/actionModalContext'
import { RepInput, SetContainer, } from '../inputComp'


export const DateModule = () => {
    const { date, updateDate, } = useContext(actionModalContext)

    const onDateChange = e => updateDate(e.target.value) 


    return (
        <SetContainer>
            <RepInput
                value={date}
                onChange={onDateChange}
                name='date'
                type='date' />
        </SetContainer>
    )
}
