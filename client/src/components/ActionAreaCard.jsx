import * as React from 'react';
import Card from '@mui/material/Card';
import {CardContent, CardMedia, Typography, CardActionArea} from '@mui/material';
import {CakeRounded} from '@mui/icons-material';

export default function ActionAreaCard(props) {
    const {img, altText, title} = props;

    return (
        <Card raised sx={{ minWidth: 345 }}>
            <CardActionArea>
                <CardMedia
                    component="img"
                    height="140"
                    image={img}
                    alt={altText}
                />
                <CardContent >
                    <Typography gutterBottom variant="h5" component="div" align='center'>
                        {title}
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}