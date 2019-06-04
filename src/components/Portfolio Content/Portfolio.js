import React, { Component } from 'react';
import * as contentful from 'contentful';
import Grid from '@material-ui/core/Grid';
import PortfolioItem from './PortfolioItem/PortfolioItem';
import PortfolioProfiles from './PortfolioProfiles/PortfolioProfiles';
import classes from './Portfolio.css';
import ContentLoader from 'react-content-loader'

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
    loaded: false
  }

  getPortfolioEntries = () => {
    client.getEntries({
      content_type: 'portfolioEntry'
    })
    .then((response) => {
      this.setState({portfolioEntries: response.items})
      this.setState({loaded: true});
    })
    .catch((error) => {
      console.log("Error occured while fetching data")
      console.log(error)
    })
  }

    MyLoader = () => (
      <ContentLoader
        className={classes.Loader} 
        height={500}
        width={400}
        speed={2}
        primaryColor="#e2e2e2"
        secondaryColor="#ffffff"
      >
        <rect x="73" y="10" rx="3" ry="3" width="255" height="60" /> 
        <rect x="73" y="80" rx="3" ry="3" width="255" height="60" />
        <rect x="73" y="150" rx="3" ry="3" width="255" height="60" />
        <rect x="73" y="220" rx="3" ry="3" width="255" height="60" /> 
        <rect x="73" y="290" rx="3" ry="3" width="255" height="60" />
        <rect x="73" y="360" rx="3" ry="3" width="255" height="60" />
        <rect x="73" y="430" rx="3" ry="3" width="255" height="60" /> 
        <rect x="73" y="500" rx="3" ry="3" width="255" height="60" />
        <rect x="73" y="570" rx="3" ry="3" width="255" height="60" />
      </ContentLoader>
    )

  render() {
    console.log(this.state.portfolioEntries)
    return (
      <div>
        { !this.state.loaded ? (
          this.MyLoader()
        ) : null }
        
        { this.state.portfolioEntries ? (
          <div>
            <Grid container className={classes.Grid}>
              {this.state.portfolioEntries.map((currentEntry, i) => (
                <Grid key={i} item xs={12} sm={12} lg={12} xl={12}>
                  <PortfolioItem clicked={this.openModal} 
                    portfolioEntry={currentEntry}
                  />
                </Grid>
              ))}
            </Grid>
          </div>
        ) : "No portfolio items found" }
        <PortfolioProfiles />
      </div>
    )
  }
}

export default Portfolio;