import React from 'react';
import { Redirect } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import PropTypes from 'prop-types';
import { withStyles, MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
const URL = require('./dev.js').URL;
const styles = {
  paper:{
    paddingTop:"50px",
    paddingBottom:"50px",
    paddingLeft:"150px"
  }
};
class displayMessage extends React.Component {
   constructor(props){
     super(props);
     this.state ={
        }
}

render() {

return (
           <div className="display">
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <br/>
           <Paper style={styles.paper} elevation={1}>
                  <Typography component="h1" variant="display1">
                    A digital coupon has been sent through sms/email to the consumer.
                  </Typography>
                  <div style={{paddingLeft:'650px',width:"100%"}}>
                <Button component={Link} to='/' onClick={this.handleSubmit}>
                <h3>HOME</h3>
                </Button>
                </div>
                </Paper>

           </div>

      );
   }
}
export default displayMessage;
