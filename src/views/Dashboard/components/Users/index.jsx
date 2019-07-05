import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

// Externals
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Typography } from '@material-ui/core';

// Material icons
import {
  ArrowUpward as ArrowUpwardIcon,
  PeopleOutlined as PeopleIcon
} from '@material-ui/icons';

// Shared components
import { Paper } from 'components';

// Component styles
import styles from './styles';

class Users extends Component {
  render() {
    const { classes, className, ...rest } = this.props;

    const rootClassName = classNames(classes.root, className);

    return (
      <Paper
        {...rest}
        className={rootClassName}
      >
        <div className={classes.content}>
          <div className={classes.details}>
            <Typography
              className={classes.title}
              variant="body2"
            >
              Script web Telegram
            </Typography>
            <Typography
              className={classes.value}
              variant="h3"
            >
             Rp 100.000
            </Typography>
          </div>
          <div className={classes.iconWrapper}>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Telegram_logo.svg/768px-Telegram_logo.svg.png" height="60" width="60" />
          </div>
        </div>
        <div className={classes.footer}>
          <Typography
            className={classes.difference}
            variant="body2"
          >
           <img src="https://img.icons8.com/carbon-copy/50/000000/bookmark-ribbon.png"/>
          
          </Typography>
          <Typography
            className={classes.caption}
            variant="caption"
          >
<NavLink to="/Home">Selengkapnya</NavLink>
            
          </Typography>
        </div>
      </Paper>
    );
  }
}

Users.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Users);
