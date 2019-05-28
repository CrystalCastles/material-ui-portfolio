import React, { Component } from 'react';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Footer.css';

class Footer extends Component {
  state = {
    value: 'LinkedIn'
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <BottomNavigation className={classes.Footer} value={value} onChange={this.handleChange}>
        <BottomNavigationAction label="LinkedIn" value="LinkedIn" icon={<FontAwesomeIcon icon={['fab', 'linkedin-in']} />} />
        <BottomNavigationAction label="Email" value="Email" icon={<FontAwesomeIcon icon={['far', 'envelope']} />} />
      </BottomNavigation>
    )
  }
}

export default Footer;