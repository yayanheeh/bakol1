import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';


// Externals
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Shared layouts
import { Dashboard as DashboardLayout } from 'layouts';

// Component styles
const styles = theme => ({
  root: {
    padding: theme.spacing.unit * 4
  },
  iframe: {
    width: '100%',
    minHeight: '640px',
    border: 0
  }
});

class Yayan extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Icons">
        <div className={classes.root}>
      Tess 

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
