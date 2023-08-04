import React, { Fragment, useState, } from 'react'
import { useQuery, } from '@apollo/react-hooks'

import { UserInfoContainer, 
    InfoSection, 
    InfoText, 
    InfoIcon, } from '../FormComp'
import { LogoutButton,
    UserBasic,
    UserInfoPassword, } from '.'

import { GET_USER_INFO } from '../../../graphql'


export const UserInfo = () => {
    const { loading, data, }    = useQuery(GET_USER_INFO)

    const [showBasicUpdate, setShowBasicUpdate] = useState(false)

    
    if (loading || !data) {
        return  (
            <Fragment>
                <InfoSection style={{ marginLeft: '2rem', }}>
                    <LogoutButton />
                </InfoSection>
                <InfoText
                    style={{ marginTop: '10rem',
                        textAlign: 'center', }} >
                    Loading . . .
                </InfoText>
            </Fragment>
            
        )
    }

    const { me } = data
    
    return (
        <Fragment>
            <InfoSection style={{ marginLeft: '2rem', }}>
                <LogoutButton />
            </InfoSection>
                
            <UserInfoContainer>
                <InfoSection>
                    <div>
                        <InfoText>Name: {me.name}</InfoText>
                        <InfoText>Email: {me.email}</InfoText>
                    </div>
                    <InfoIcon 
                        className='far fa-edit'
                        onClick={() => setShowBasicUpdate(!showBasicUpdate)} />
                </InfoSection>
                    {showBasicUpdate && <UserBasic user={me} />}

                
                    <UserInfoPassword />
                
            </UserInfoContainer>
        </Fragment>
        
    )
}
