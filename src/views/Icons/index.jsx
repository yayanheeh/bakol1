import React, { Component } from 'react';
import { Grid } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';


// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';
// Custom components
import { Content2} from './icons';



// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },
  iframe: {
    width: '100%',
    minHeight: '100px',
    border: 0
  }
});

class Icons extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Icons">
        <div className={classes.root}>

 <Grid
            container
            spacing={4}
          >
            <Grid
              item
              md={5}
              xs={12}
            >
   <CardContent>        
   Tes1</CardContent>
            </Grid>
            <Grid
              item
              md={7}
              xs={12}
            >
<CardContent>
 <Content2/></CardContent>
              
            </Grid>
          </Grid>
          <iframe
            className={classes.iframe}
            src="http://id2.indostreamingtv.com/live/tv2/index.m3u8"
            title="Material Design icons"
          />
        </div>
      </DashboardLayout>
    );
  }
}

Icons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Icons);
