import React, { Component } from 'react';
import { Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
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

class Home extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Bakolscript">
        <div className={classes.root}>
     

<div>
      <Paper className={classes.root}>
        <Typography variant="h5" component="h3">
          This is a sheet of paper.
        </Typography>
        <Typography component="p">
    
      <small>
Home
Script Telegram
Script Youtube
Free theme
Specs
Support
Compare
Buy
Foto
Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, quos, voluptate, sunt, in suscipit quibusdam quis dignissimos eligendi repellendus ipsam exercitationem adipisci nostrum fugit accusamus quae cum nisi accusantium eaque.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolore, impedit eveniet necessitatibus voluptate distinctio quam repellendus voluptates voluptatum inventore rem sapiente minus esse saepe iste harum architecto numquam quis vero dignissimos beatae est id libero adipisci enim odio natus commodi explicabo modi similique nesciunt deserunt vel consectetur velit omnis quaerat corrupti. Cumque, perspiciatis, culpa, reprehenderit laboriosam obcaecati deleniti soluta tempora ipsum ipsam iure temporibus dolore modi quidem cum doloribus ex vel suscipit sapiente ut esse optio voluptates molestias natus nostrum illo nihil quisquam facilis hic atque voluptas quae pariatur placeat officia doloremque quia ea recusandae rem iste asperiores iusto debitis quod incidunt id nemo repellendus itaque. Iure, vel, expedita quam repellendus aliquam fugit autem obcaecati libero reiciendis excepturi officia voluptate molestiae quis itaque consequatur nulla ea sunt facilis cupiditate tempora sequi nam in asperiores! Sunt, maxime at id eaque debitis quasi a possimus eveniet eum velit tempore quidem voluptates expedita quibusdam officiis. Ipsum, quaerat, vero, adipisci enim autem inventore eum maiores consectetur culpa molestiae cumque sed qui dolorem. Placeat, quae deleniti molestiae minima cupiditate quaerat sit est perspiciatis error iste. Ratione, minus, commodi, magni laborum doloribus libero ullam quos tenetur quis molestias ipsam consequuntur harum asperiores culpa nostrum omnis.

Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequatur, dolore, impedit eveniet necessitatibus voluptate distinctio quam repellendus voluptates voluptatum inventore rem sapiente minus esse saepe iste harum architecto numquam quis vero dignissimos beatae est id libero adipisci enim odio natus commodi explicabo modi similique nesciunt deserunt vel consectetur velit omnis quaerat corrupti. Cumque, perspiciatis, culpa, reprehenderit laboriosam obcaecati deleniti soluta tempora ipsum ipsam iure temporibus dolore modi quidem cum doloribus ex vel suscipit sapiente ut esse optio voluptates molestias natus nostrum illo nihil quisquam facilis hic atque voluptas quae pariatur placeat officia doloremque quia ea recusandae rem iste asperiores iusto debitis quod incidunt id nemo repellendus itaque. Iure, vel, expedita quam repellendus aliquam fugit autem obcaecati libero reiciendis excepturi officia voluptate molestiae quis itaque consequatur nulla ea sunt facilis cupiditate tempora sequi nam in asperiores! Sunt, maxime at id eaque debitis quasi a possimus eveniet eum velit tempore quidem voluptates expedita quibusdam officiis. Ipsum, quaerat, vero, adipisci enim autem inventore eum maiores consectetur culpa molestiae cumque sed qui dolorem. Placeat, quae deleniti molestiae minima cupiditate quaerat sit est perspiciatis error iste. Ratione, minus, commodi, magni laborum doloribus libero ullam quos tenetur quis molestias ipsam consequuntur harum asperiores culpa nostrum omnis.

</small>
   </Typography>
      </Paper>
    </div>

</div>
      </DashboardLayout>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Home);
