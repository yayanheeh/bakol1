import React, { Component } from 'react';

// Externals
import PropTypes from 'prop-types';
import classNames from 'classnames';

// Material helpers
import { withStyles } from '@material-ui/core';

// Material components
import { Button, TextField } from '@material-ui/core';

// Shared components
import {
  Portlet,
  PortletHeader,
  PortletLabel,
  PortletContent,
  PortletFooter
} from 'components';

// Component styles
import styles from './styles';

class Password extends Component {
  state = {
    values: {
      password: '',
      confirm: ''
    }
  };

  handleFieldChange = (field, value) => {
    const newState = { ...this.state };

    newState.values[field] = value;

    this.setState(newState, this.validateForm);
  };

  render() {
    const { classes, className, ...rest } = this.props;
    const { values } = this.state;

    const rootClassName = classNames(classes.root, className);

    return (
      <Portlet
        {...rest}
        className={rootClassName}
      >
        <PortletHeader>
          <PortletLabel
            subtitle="Update password"
            title="Password"
          />
        </PortletHeader>
        <PortletContent>
          <form className={classes.form}>
      <center> <img src="https://seeklogo.com/images/T/telegram-logo-AD3D08A014-seeklogo.com.png" width="150" height="150"/></center>
     <br/>   
 <small> <p><b>Rincian teknis</b></p>
 <p align="justify"> Aplikasi ini didasarkan pada kerangka JavaScript AngularJS, dan ditulis dalam JavaScript murni. jQuery digunakan untuk manipulasi DOM, dan Bootstrap sebagai kerangka-CSS.
  </p> <br/> 
<p><b>Perpustakaan pihak ketiga</b></p>
 <p align="justify"> Selain kerangka kerja yang disebutkan di atas, perpustakaan lain digunakan untuk kebutuhan protokol dan UI. Berikut daftar singkatnya:</p>
<br/>
<li><a href="http://www-cs-students.stanford.edu/~tjw/jsbn">Jsbn</a></li>
<li><a href="https://code.google.com/p/crypto-js">CryptoJS</a></li> 
<li><a href="https://github.com/imaya/zlib.js">zlib.js</a></li>  
 <li><a href="http://angular-ui.github.io/bootstrap">UI Bootstrap</a></li> 
<li> <a href="https://github.com/diy/jquery-emojiarea">jQuery Emojiarea</a></li>
<li> <a href="https://github.com/jamesflorentino/nanoScrollerJS">nanoScrollerJS</a> </li>
<li><a href="https://github.com/github/gemoji">gemoji</a></li>
<li> <a href="https://github.com/iamcal/emoji-data">emoji-data</a>
 </li>    
</small>
 </form>
        </PortletContent>
        <PortletFooter className={classes.portletFooter}>
          <Button
            color="primary"
            variant="outlined"
          >
            Demo
          </Button>
        </PortletFooter>
      </Portlet>
    );
  }
}

Password.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Password);
