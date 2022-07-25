import React from 'react'
import styled from 'styled-components'


export const Feature = () => {

    const img = '/assets/featureImg.png';
    const source = process.env.PUBLIC_URL + img;

    const Image = styled.img`
        width: 100%;
        pointer-events: none;
        position: relative;
        top: -10px
    `

    return (
        <>
            <Image src={source} alt="" />
        </>
    )
}
