import React, { Component } from 'react';
import * as contentful from 'contentful';
import Grid from '@material-ui/core/Grid';
import PortfolioItem from './PortfolioItem/PortfolioItem';
import classes from './Portfolio.css';

const SPACE_ID = '65ejzlhn4hqj';
const ACCESS_TOKEN = 'eW9-MqztxBSK4xZhPOhwAACau_k9-uKdJb5mHJtzYFI';

const client = contentful.createClient({
  space: SPACE_ID,
  accessToken: ACCESS_TOKEN
});

class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.getPortfolioEntries();
  }

  state = {
    portfolioEntries: [],
  }

  getPortfolioEntries = () => {
    client.getEntries({
      content_type: 'portfolioEntry'
    })
    .then((response) => {
      this.setState({portfolioEntries: response.items})
    })
    .catch((error) => {
      console.log("Error occured while fetching data")
      console.log(error)
    })
  }

  render() {
    console.log(this.state.portfolioEntries)
    return (
      <div>
        { this.state.portfolioEntries ? (
          <div>
            <Grid container  className={classes.Grid}>
              {this.state.portfolioEntries.map(currentEntry => (
                <Grid item xs={12} sm={12} lg={12} xl={12}>
                  <PortfolioItem clicked={this.openModal} 
                    portfolioEntry={currentEntry}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : "No portfolio items found" }
      </div>
    )
  }
}

export default Portfolio;