import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {assets} from '../assets/assets';

export default function ImgMediaCard({name,basicDesc,image}) {
  return (
    <Card sx={{ maxWidth: 285, minWidth:250 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="120"
        image= {image}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          {basicDesc}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Explore</Button>
      </CardActions>
    </Card>
  );
}
