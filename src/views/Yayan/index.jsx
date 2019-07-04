import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';

// Grif
import Grid from '@material-ui/core/Grid';

// Material helpers
import { withStyles } from '@material-ui/core';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';

// Component styles
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

class Yayan extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Yayan">
        <div className={classes.root}>
         Tessss
 
      <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>xs=6</Paper>
        </Grid>
Tes
        </div>
      </DashboardLayout>
    );
  }
}

Yayan.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Yayan);
