import React from 'react'
import ActionAreaCard from '../components/ActionAreaCard'
import Grid2 from '@mui/material/Unstable_Grid2/Grid2'
import { Box, Container, Typography } from '@mui/material'
import Image from '../static/various_pastries.jpg'
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { DeliveryDining, StoreRounded, DirectionsCarRounded } from '@mui/icons-material'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

function Home() {
    const cardInfo = {
        bread: "BREADS",
        pastry: "PASTRIES",
        drinks: "DRINKS"
    }

    const styles = {
        container: {
            backgroundImage: `url(${Image})`,
        }
    }
    return (
        <Container maxWidth='xl'>
            <Box style={styles.container} sx={{ paddingTop: 4, paddingBottom: 4 }}>
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

            </Box>
            <Box>
                <Grid2 container spacing={.5} justifyContent="space-evenly">
                    <Grid2 xs={6}>
                        <Typography
                            variant="h3"
                            component="a"
                            align='center'
                            href="/"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}>
                            Convenient Ways to Crumb
                        </Typography>
                    </Grid2>
                    <Grid2 container xs={6}>
                        <Grid2>
                            <Box>
                                <DeliveryDining color='primary' sx={{ fontSize: 200 }}></DeliveryDining>
                            </Box>
                        </Grid2>
                        <Grid2>
                            <Box><StoreRounded color='primary' sx={{ fontSize: 200 }}></StoreRounded></Box>
                        </Grid2>
                        <Grid2>
                            <Box><DirectionsCarRounded color='primary' sx={{ fontSize: 200 }}></DirectionsCarRounded></Box>
                        </Grid2>
                    </Grid2>
                </Grid2>
            </Box>
        </Container>
    )
}

export default Home