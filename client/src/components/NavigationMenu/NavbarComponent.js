import React from 'react'
import Navbar from './Navbar'
import styled from 'styled-components'

export const NavbarComponent = () => {


    const OrangeLine = styled.hr`
        /* border: 10px solid #FF623D; */
        color: #FF623D;
        border-top: 9px solid #FF623D;
        border-bottom: 0px;
    `


    return (
        <>

            <Navbar />
            <OrangeLine />

        </>
    )
}
