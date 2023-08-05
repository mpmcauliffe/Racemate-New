import React from 'react'
import { BannerContainer, Banner, BannerButton } from './UpdateBannerComp'


export const UpdateBanner = () => {
    return (
        <BannerContainer>
            <Banner>
                <h5>Deleting exercise will remove all data associated with that exercise and it CANNOT be undone. Do you wish to proceed?</h5>
                <div style={{ width: '80%', }}>
                    <BannerButton>CANCEL</BannerButton>
                    <BannerButton warning>DELETE</BannerButton>
                </div>    
            </Banner>
        </BannerContainer>
    )
}
