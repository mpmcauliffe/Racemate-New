import React, { useState, useEffect, useContext, } from 'react'
import actionModalContext from '../../../context/actionModal/actionModalContext'

import { SWtext, BtnRound, LapText } from './StopwatchComp'
import { SetContainer, InternalContainer, UpdateText, } from '../inputComp'
import { InfoIcon, } from '../..'

import { incrementString } from '../../../helpers'


export const Stopwatch = () => {
    const { timeDistanceArray, addTimeDisElement, splitLap, } = useContext(actionModalContext)

    const [start, setStart] = useState(false)
    const [dec, setDec] = useState('00')
    const [sec, setSec] = useState('00')
    const [min, setMin] = useState('00')
    const [hrs, setHrs] = useState('00')

    //console.log(timeDistanceArray)
    const handleStartStop = () => setStart(!start)
    
    const executeSplit = () => {
        splitLap(`${hrs}:${min}:${sec}.${dec}`)
        addTimeDisElement()
    }
    
    const executeReset = () => {
        setDec('00')
        setSec('00')
        setMin('00')
        setHrs('00')
    }

    const timeTracker = () => {
        setDec(prevSec => prevSec === '09' ? '00' : incrementString(prevSec))
        setSec(prevSec => prevSec === '59' 
            ? '00' 
            : dec === '09'
                ? incrementString(prevSec)
                : prevSec        
        )
        setMin(prevMin => prevMin === '59' 
            ? '00' 
            : sec === '59' 
                ? incrementString(prevMin) 
                : prevMin
        )
        setHrs(prevHrs => prevHrs === '59' 
            ? '00' 
            : min === '59' 
                ? incrementString(prevHrs) 
                : prevHrs
        )
    }

    useEffect(() => {
        const timer = setInterval(() => timeTracker(), 100)
        
        if (!start) {
            clearInterval(timer)
        }
        
        return () => { clearInterval(timer) }
    }, [start, dec, sec, min, hrs])


    return (
        <SetContainer>
            <SWtext full={hrs !== '00' && true}>{hrs !== '00' && `${hrs}:`}{min}:{sec}.{dec}</SWtext>

            <InternalContainer style={{ justifyContent: 'space-between' }}>
                <BtnRound
                    onClick={start ? executeSplit : executeReset}
                    style={{ marginLeft: '5%' }} >
                    {!start && <InfoIcon 
                        className="fas fa-reply" 
                        style={{ fontSize: '5rem', color: '#ffb900', }} />}

                    {start && <InfoIcon 
                        className="fas fa-sync-alt" 
                        style={{ fontSize: '5rem', color: '#ffb900', }} />}
                </BtnRound>
                {/*** ***/}
                <BtnRound 
                    onClick={handleStartStop}
                    style={{ marginRight: '5%' }} >
                    {!start && <InfoIcon 
                        className="fas fa-play"
                        style={{ fontSize: '5rem', marginLeft: '1rem', color: '#ffb900', }}  />}
                    
                    {start && <InfoIcon 
                        className="fas fa-stop" 
                        style={{ fontSize: '5rem', color: '#ffb900', }} />}
                </BtnRound>                        
            </InternalContainer>
            {timeDistanceArray.length > 1 &&
                timeDistanceArray.map((lap, i) => (
                    <InternalContainer 
                        key={`${i}_${lap.time}`}
                        style={{ height: '5rem', margin: '0 auto' }}>
                        {lap.time !== '00:00:00:00' && <LapText>Lap {i+1}:&emsp;{lap.time}</LapText>}
                    </InternalContainer>
                ))         
            }
        </SetContainer>
    )
}
