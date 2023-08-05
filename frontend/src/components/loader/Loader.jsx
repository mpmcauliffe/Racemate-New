import React from 'react'
import './styles.css'


// see https://loading.io/css/
export const Loader = () => {
    return (
        <div /* CUSTOM CLASS AND NOT IN ORIGINAL PACKAGE */
            className='spinner-container' >

            <div className='lds-facebook'>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
        
    )
}

// style={{ width: '5vw', 
//                 minHeight: '50vh', 
//                 margin: '40vh auto',
//                 paddingBottom: '15vh' }}


// position: 'absolute',
//                 margin: 'auto',
//                 top: 0,
//                 right: 0,
//                 bottom: 0,
//                 left: 0,
//                 width: '200px',
//                 height: '200px',
