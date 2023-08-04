import React, { Fragment, useState, useContext, } from 'react'
import { useMutation, } from '@apollo/react-hooks'
import AlertContext from '../../../context/alert/alertContext'

import { FormContainer, 
    InfoButton, 
    UserLabel, 
    InfoSection,} from '../FormComp'
import { Alert, } from '../../../components'

import { UPDATE_USER_PASSWORD } from '../../../graphql'


export const UserInfoPassword = () => {
    const { setAlert, }     = useContext(AlertContext)

    const [showPasswordForm, setShowPasswordForm] = useState(false)
    const [userPassword, setUserPassword]         = useState({
        currentPassword: '',
        newPassword: '',
        newPassword2: '',
    })
    const { currentPassword, newPassword, newPassword2, } = userPassword

    const [updateUserPassword]                            = useMutation(UPDATE_USER_PASSWORD)

    const onChange = e => setUserPassword({ ...userPassword, [e.target.name]: e.target.value })

    const onSubmit = async e => {
        e.preventDefault()

        if (currentPassword === '' || newPassword === '' || newPassword2 === '') {
            setAlert('All fields are required', 'warning')
            return
        }
        if (newPassword.length < 6) {
            setAlert('A password must have at least 6 characters', 'warning')
            return
        }
        if (newPassword !== newPassword2) {
            setAlert('"New Password" and "Confirm Password" must match', 'warning')
            return
        }

        const res = await updateUserPassword({
            variables: {
                currentPassword,
                newPassword
            }
        })
        console.log(res.data)
        const { message } = res.data.updateUserPassword

        if (message === 'Invalid credentials') {
            setAlert(message, 'warning')
            return
        }

        setAlert(message)
    }

    return (
        <Fragment>
            <InfoSection>
                <InfoButton 
                    onClick={() => setShowPasswordForm(!showPasswordForm)}
                    wide
                    style={{ margin: '5rem auto 1rem auto' }} 
                > Change Password
                </InfoButton>
            </InfoSection>
            
            {showPasswordForm &&
                <form>
                    <Alert />
                    <FormContainer>
                        <UserLabel htmlFor='password'>Current Password</UserLabel>
                        <input /* PASSWORD */
                            onChange={onChange}
                            value={currentPassword}
                            minLength='6'
                            name='currentPassword'
                            type='password' />

                        <UserLabel htmlFor='password'>New Password ... 6 character minimum</UserLabel>
                        <input /* PASSWORD */
                            onChange={onChange}
                            value={newPassword}
                            minLength='6'
                            name='newPassword'
                            type='password' />

                        <UserLabel htmlFor='password'>Confirm Password</UserLabel>
                        <input /* PASSWORD */
                            onChange={onChange}
                            value={newPassword2}
                            minLength='6'
                            name='newPassword2'
                            type='password' />

                        <InfoButton 
                            onClick={onSubmit}
                            wide
                        > Update Password
                        </InfoButton>
                    </FormContainer>
                </form>
            }
        </Fragment>
        
    )
}
