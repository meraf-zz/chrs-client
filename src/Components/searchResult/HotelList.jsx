import React, { Component } from 'react';
import img from './1.png'
import Typography from '@material-ui/core/Typography';
import {Button} from '@material-ui/core';
import Rated from './Rated'

class HotelList extends Component {
    render() {
        return (
            <div>
                
                <img src={img} alt="Smiley face"></img>
                <Typography paragraph>
                    <h3>
                    Ethiopian Sky light Hotel
                    <Rated></Rated>
                    <hr></hr>
                    </h3>
                    <div>
                        <p>bole bala bala</p>
                    </div>
                    
        </Typography>
        <div>

        <Button
         type="submit"
            variant="contained"
            color="primary"
            >
            Choose Room
        </Button>
        </div>
            </div>
        );
    }
}

export default HotelList;