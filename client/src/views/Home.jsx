import React from 'react'
import ActionAreaCard from '../components/ActionAreaCard'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { Container } from '@mui/material'

function Home() {
    const cardInfo = {
        bread : "BREADS",
        pastry : "PASTRIES",
        drinks : "DRINKS"
    } 
    return (
        <Container maxWidth='lg' sx={{marginTop: 5}}>
            <Grid2 container spacing={3} justifyContent="space-evenly">
                <Grid2>
                    <ActionAreaCard title={cardInfo.bread} altText="Various breads on display" img='https://img1.wsimg.com/isteam/ip/124486d7-b189-4197-a6be-dd761af79c1e/IMG_2132.jpg' />
                </Grid2>
                <Grid2>
                    <ActionAreaCard title={cardInfo.pastry} altText="Various pastries on display" img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXTCsCgGcm1pauCekTtM27BKxOf1pOSXR4wA&usqp=CAU' />
                </Grid2>
                <Grid2>
                    <ActionAreaCard title={cardInfo.drinks} altText="Coffee with heart foam art" img='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbSIVM_E1HM1AEeOPPGuK5o0j4uWYjgR248A&usqp=CAU' />
                </Grid2>
            </Grid2>
        </Container>
    )
}

export default Home