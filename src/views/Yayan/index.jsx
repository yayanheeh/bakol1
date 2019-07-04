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
  .demo-facebook-card .card-header {
  display: block;
  padding: 10px;
}
.demo-facebook-card .demo-facebook-avatar {
  float: left;
}
.demo-facebook-card .demo-facebook-name {
  margin-left: 44px;
  font-size: 14px;
  font-weight: 500;
}
.demo-facebook-card .demo-facebook-date {
  margin-left: 44px;
  font-size: 13px;
  color: #8e8e93;
}
.demo-facebook-card .card-footer {
  background: #fafafa;
}
.demo-facebook-card .card-footer a {
  color: #81848b;
  font-weight: 500;
}
.demo-facebook-card .card-content img {
  display: block;
}
.demo-facebook-card .card-content-padding {
  padding: 15px 10px;
}
.demo-facebook-card .card-content-padding .likes {
  color: #8e8e93;
}
});

class Yayan extends Component {
  render() {
    const { classes } = this.props;

    return (
      <DashboardLayout title="Icons">
        <div className={classes.root}>
      Tess 
 <div class="card demo-facebook-card">
  <div class="card-header">
    <div class="demo-facebook-avatar"><img src="http://lorempixel.com/68/68/people/1/" width="34" height="34"/></div>
    <div class="demo-facebook-name">John Doe</div>
    <div class="demo-facebook-date">Monday at 3:47 PM</div>
  </div>
  <div class="card-content"> <img src="http://lorempixel.com/1000/700/nature/8/" width="100%"/></div>
  <div class="card-footer"><a href="#" class="link">Like</a><a href="#" class="link">Comment</a><a href="#" class="link">Share</a></div>
</div>

<div class="card demo-facebook-card">
  <div class="card-header">
    <div class="demo-facebook-avatar"><img src="http://lorempixel.com/68/68/people/1/" width="34" height="34"/></div>
    <div class="demo-facebook-name">John Doe</div>
    <div class="demo-facebook-date">Monday at 2:15 PM</div>
  </div>
  <div class="card-content card-content-padding">
    <p>What a nice photo i took yesterday!</p><img src="http://lorempixel.com/1000/700/nature/8/" width="100%"/>
    <p class="likes">Likes: 112 &nbsp;&nbsp; Comments: 43</p>
  </div>
  <div class="card-footer"><a href="#" class="link">Like</a><a href="#" class="link">Comment</a><a href="#" class="link">Share</a></div>
</div>  Tessss
 

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
