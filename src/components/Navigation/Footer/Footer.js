import React, { Component } from 'react';

import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Footer extends Component {
  state = {
    value: 'recents'
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { value } = this.state;

    return (
      <BottomNavigation value={value} onChange={this.handleChange}>
        <BottomNavigationAction label="Recents" value="recents" icon={<FontAwesomeIcon icon="linkedin" />} />
        <BottomNavigationAction label="Favorites" value="favorites" icon={<FontAwesomeIcon icon="stroopwafel" />} />
      </BottomNavigation>
    )
  }
}

export default Footer;