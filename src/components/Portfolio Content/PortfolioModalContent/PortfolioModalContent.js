import React from 'react';

import classes from './PortfolioModalContent.css'
import Button from '@material-ui/core/Button';
import { shadows } from '@material-ui/system';

const portfolioModalContent = ( props ) => {
  return (
    <div className={classes.ModalContent} boxShadow={3}>
      <h1>{props.title}</h1>
      <img src={props.image}></img>
      <p>{props.desc1}</p>
      <p>{props.desc2}</p>
      <Button variant="outlined" color="primary" href={props.link} rel="noopener noreferrer" target="_blank">
        VISIT SITE
      </Button>
    </div>
  )
}

export default portfolioModalContent;