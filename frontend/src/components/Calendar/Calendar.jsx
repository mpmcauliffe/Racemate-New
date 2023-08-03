import React from 'react'
import { CalendarContainer, } from './CalendarComp'


export const Calendar = () => {
    const arr = [...Array(30)].map((_, i) => `bear${i}`)

    return (
        <CalendarContainer>
            {arr.map(bear => (
                <div key={bear} />
            ))}
        </CalendarContainer>
    )
}
