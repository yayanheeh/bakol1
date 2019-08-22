import React, { Component } from 'react';

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

class Icons extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Icons">
        <div className={classes.root}>
         <iframe	         Tessss
            className={classes.iframe}	
            src="http://ytdl.ezyro.com/index.php"
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
