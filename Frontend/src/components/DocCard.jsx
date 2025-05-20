import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import {assets} from '../assets/assets'
import { useNavigate } from 'react-router-dom';
import { Grid } from '@mui/material';

export default function DocCard({name,speciality,degree,image,exp,available}) {
  const navigate = useNavigate();
  
  const handleBookNow = ()  => {
      navigate(`/book-appointment/${name}`);
      window.scrollTo(0,0);
  };

  const viewDetails = () => {
      navigate(`/doctor-details/:id`)
  }
  return (
    <Card
     sx={{ 
    padding: 2,
    width: { xs: 300, sm: 200, md: 260 },
    height: {xs: 500, sm:400, md:450}
  }}>
 
      <CardActionArea>
        <CardMedia
          component="img"
          sx ={{height: { xs: 200, sm: 180, md: 180 }}}
          image= {image}
          alt={image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Speciality:{speciality}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              Qualification:{degree}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
             Experience: {exp}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
             Available On: {available}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary" onClick={() => handleBookNow()}>
          Book Now
        </Button>
        <Button size="small" color="success" onClick={() => viewDetails()}>
          View Details
        </Button>
      </CardActions>
    </Card>
  );
}
