import React from 'react';
import Grid from '@material-ui/core/Grid';
import github from '../../../assets/img/github.png';
import freecodecamp from '../../../assets/img/fcc.png';
import upwork from '../../../assets/img/upwork.png';
import fiverr from '../../../assets/img/fiverr.png';
import classes from './PortfolioProfiles.css';
import ScrollAnimation from 'react-animate-on-scroll';

const portfolioProfiles = () => {
  return (
    <div className={classes.ProfileSection}>
      <Grid container
        direction="row"
        justify="center"
        alignItems="center">

        <Grid item xs={12} sm={6} lg={3} xl={3}>
          <ScrollAnimation 
            animateIn="fadeInLeft">
            <a href="https://github.com/CrystalCastles" rel="noopener noreferrer" target="_blank">
              <div className={classes.ImgContainer}>
                <img className={classes.Github} src={github} alt=""/>
              </div>
            </a>
          </ScrollAnimation>
        </Grid>
         
        <Grid item xs={12} sm={6} lg={3} xl={3}>
          <ScrollAnimation 
          animateIn="fadeInLeft"
          delay={500}>
            <a href="https://www.freecodecamp.org/crystalcastles" rel="noopener noreferrer" target="_blank">
              <div className={classes.ImgContainer}>
                <img src={freecodecamp} alt=""/>
              </div>
            </a>
          </ScrollAnimation>
        </Grid>
        
        <Grid item xs={12} sm={6} lg={3} xl={3}>
          <ScrollAnimation 
          animateIn="fadeInRight"
          delay={1000}>
            <a href="https://www.fiverr.com/crystalcastles" rel="noopener noreferrer" target="_blank">
              <div className={classes.ImgContainer}>
                <img src={fiverr} alt=""/>
              </div>
            </a>
          </ScrollAnimation>
        </Grid>
      
        <Grid item xs={12} sm={6} lg={3} xl={3}>
          <ScrollAnimation 
          animateIn="fadeInRight"
          delay={1500}>
            <a href="https://www.upwork.com/o/profiles/users/_~01002b31bb66dbdc9c/" rel="noopener noreferrer" target="_blank">
              <div className={classes.ImgContainer}>
                <img src={upwork} alt=""/>
              </div>
            </a>
          </ScrollAnimation>
        </Grid>      
      </Grid>
    </div>
  )
}

export default portfolioProfiles;