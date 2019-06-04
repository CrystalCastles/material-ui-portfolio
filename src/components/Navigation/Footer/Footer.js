import React, { Component } from 'react';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import classes from './Footer.css';

class Footer extends Component {
  state = {
    value: ''
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <BottomNavigation className={classes.Footer} value={value} onChange={this.handleChange}>
        <BottomNavigationAction href="https://www.linkedin.com/in/danpichardo/" rel="noopener noreferrer" target="_blank" label="LinkedIn" value="LinkedIn" icon={<FontAwesomeIcon  className={classes.Icon} icon={['fab', 'linkedin-in']} size="lg" />} />
        <BottomNavigationAction href="https://www.twitter.com/undeadburg" rel="noopener noreferrer" target="_blank" label="Twitter" value="Twitter" icon={<FontAwesomeIcon className={classes.Icon} icon={['fab', 'twitter']} size="lg" />} />
        <BottomNavigationAction href="mailto:danielpichardo716@gmail.com" label="Email" value="Email" icon={<FontAwesomeIcon className={classes.Icon} icon={['far', 'envelope']}  size="lg"/>} />
      </BottomNavigation>
    )
  }
}

export default Footer;