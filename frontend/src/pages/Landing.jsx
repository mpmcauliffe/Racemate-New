import React, { useState, useEffect } from 'react'
import { useHistory, } from 'react-router-dom'
import { useQuery, } from '@apollo/react-hooks'
import { PageContainer, } from './PageComp'
import { Login, Signup, OpSwitch, ReflectBanner, AuthContainer, } from '../components'
import { IS_LOGGED_IN } from '../graphql'


const Landing = props => {
    let history                             = useHistory()
    
    const [formDisplay, setFormDisplay]     = useState('Sign Up')
    const optButtons                        = ['Sign Up', 'Login']
    const { data }                          = useQuery(IS_LOGGED_IN)

    
    useEffect(() => {
        if (data && data.isLoggedIn) {
            history.push('/home')
        }

    // updates form upon user action
    }, [history, data, formDisplay])

    const handleToggle = buttonName => {
        setFormDisplay(buttonName)
    }

    return (
        <div>
            <AuthContainer style={{ marginBottom: '0' }}>
                <ReflectBanner />
                {/*<PageContainer style={{ padding: '15rem 10% 0 10%', }}> */}
                
                <OpSwitch 
                    optButtons={optButtons}
                    handleToggle={handleToggle} />
            </AuthContainer>
            
            {formDisplay === 'Sign Up'
                ? (
                    <Signup 
                        opToggle={handleToggle} />
                ) : (
                    <Login 
                        opToggle={handleToggle} />
                )
            }          
        </div>
    )
}


export { Landing }
