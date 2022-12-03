import React, { Component } from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import { Button } from '@mui/material';
import Grid from '@mui/material/Grid';
import '../css/Cards.css';

//import cards from '../../card.json';

class Cards extends Component {
  
    render() {
      
        return (
            <div className="card-container">
                <Grid item xs={12} container spacing={2}>
                  {
                     this.props.cards.map( card => {
                        return(
                           <Grid item lg={3} sm={6} xs={12} >
                              <Card className="card">
                                 <CardHeader
                                 title= {card.title}
                                 subheader={card.subHeader}
                                 />
                                 <CardMedia
                                    component="img"
                                    height="194"
                                    image={card.imgUrl}
                                    alt={card.imgAlt}
                                 />
                                 <CardContent>
                                 <Typography variant="body2" color="text.secondary">
                                    Price: {card.price}
                                 </Typography>
                                 </CardContent>
                                 <CardActions disableSpacing>
                                    <Button variant="contained">Add to cart</Button>
                                 </CardActions>
                                 </Card>
                    </Grid>
                        )
                     })
                  }
                  
                </Grid>
            </div>
        );
    }
}

export default Cards;