import React, { Fragment, useState, useEffect, } from 'react'
import ModalFormState from '../context/modalForm/ModalFormState'
import ActionModalState from '../context/actionModal/ActionState'
import SaveUnitState from '../context/set/SaveUnitState'
import { useApolloClient, } from '@apollo/react-hooks'
import { Nav, OpSwitch, GridStack, Footer, } from '../components'
import { WidePageContainer, } from './PageComp'
//import { UpdateBanner } from '../components'


export const Home = props => {
    const client                                = useApolloClient()
    const [userSelection, setUserSelection]     = useState('Exercises')
    const optButtons                            = ['Exercises', 'Workouts', 'Routine']
    
    client.writeData({ data: { userSelection: userSelection } })
    client.writeData({ data: { isSetPreloaded: false }})

    useEffect(() => { }, [userSelection])

    const handleToggle = buttonName => {
        setUserSelection(buttonName)
        client.writeData({ data: { userSelection: userSelection } })
    }


    // if (userSelection !== 'Exercises') {
    //     return (
    //         <p>{userSelection} is currently in production.</p>
    //     )
    // }

    return (
        <Fragment>
            <Nav />

            <ModalFormState>
                <ActionModalState>
                    <SaveUnitState>
                        <WidePageContainer>
                            <OpSwitch 
                                optButtons={optButtons}
                                handleToggle={handleToggle} />
                        
                            {userSelection === 'Exercises' 
                                ? <GridStack />
                                :  <p style={{ textAlign: 'center', }}><strong>"{userSelection}" is currently in production.</strong></p>}
                        </WidePageContainer>
                        <Footer />
                    </SaveUnitState>
                </ActionModalState>
            </ModalFormState>
        </Fragment>
        
    )
}
