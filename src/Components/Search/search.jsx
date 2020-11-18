import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import { Button } from '@material-ui/core';

import React, { Component } from 'react';

class search extends Component {
    render() {
        return (
            <div>
                <form  noValidate autoComplete="off" >
            <div style={{paddingLeft:'2%'}}>
              <TextField required id="standard-required" placeholder="Location" defaultValue=""  style={{paddingLeft:'2%'}} />
              <TextField required id="standard-required" placeholder="Check_In - Cheack_Out" type='date' defaultValue=""  style={{paddingLeft:'2%'}} />
              <TextField required id="standard-required" placeholder="Check_In - Cheack_Out" type='date' defaultValue=""  style={{paddingLeft:'2%'}} />
              <TextField required id="standard-required" placeholder="Room Type" defaultValue=""  style={{paddingLeft:'2%'}} />
              <Button
                      type="submit"
                      variant="contained"
                      color="primary"
                      >
                      Search
                    </Button>
      
             
            </div>
          </form>
            </div>
        );
    }
}

export default search;