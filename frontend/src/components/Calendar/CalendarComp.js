import styled from 'styled-components'


export const CalendarContainer = styled.div`
    display: flex;
    position: absolute;
    flex-wrap: wrap;
    height: 13%;
    width: 28%;
    margin-top: 16%;
    margin-left: 9%;
    justify-content: space-evenly;

    div {
        height: 17.5%;
        width: 13.5%;
        background: ${props => props.theme.calendarDark};
    }
`
