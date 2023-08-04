import React from 'react'
import { useQuery, } from '@apollo/react-hooks'
import { Card, } from './Card'
import { MainGrid, } from './GridStackComp'
import { Loader } from '../../components'
import { GET_EXERCISES } from '../../graphql'


export const GridStack = () => {
    const { loading, data, } = useQuery(GET_EXERCISES)

    if (loading) {
        return <Loader />
    }

    //const { myExercises } = data

    return (
        <MainGrid>
            {data && data.myExercises.map((item, index) => (            
                <Card 
                    key={item.id}
                    info={item} />
            ))}    
        </MainGrid>
    )
} 

// <div key={item.id}></div>