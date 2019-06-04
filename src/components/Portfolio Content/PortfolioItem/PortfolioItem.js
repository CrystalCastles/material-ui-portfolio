import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardActionArea from '@material-ui/core/CardActionArea';
import classes from './PortfolioItem.css';
import Modal from '@material-ui/core/Modal';
import Slide from '@material-ui/core/Slide';
import Grow from '@material-ui/core/Grow';
import PortfolioModalContent from '../PortfolioModalContent/PortfolioModalContent';

class PortfolioItem extends Component {
  state = {
    open: false
  }

  handleOpen = () => {
    this.setState({ open: true })
  }

  handleClose = () => {
    this.setState({ open: false })
  };

  render() {
    return (
      <div>
        { this.props.portfolioEntry ? (
          <div>
          <Grow timeout={1500} in={true} mountOnEnter unmountOnExit>
            <Card className={classes.Card}>
              <CardActionArea onClick={this.handleOpen}>
                <CardMedia className={classes.CardMedia} 
                  image={this.props.portfolioEntry.fields.portfolioEntryThumbnail.fields.file.url}
                  title={this.props.portfolioEntry.fields.portfolioEntryTitle}
                />
              </CardActionArea>
            </Card>
          </Grow>
          <Modal className={classes.Modal}
            open={this.state.open}
            onClose={this.handleClose}
          >
            <Slide direction="up" in={this.state.open} mountOnEnter unmountOnExit>
              <PortfolioModalContent title={this.props.portfolioEntry.fields.portfolioEntryTitle}
                  desc1={this.props.portfolioEntry.fields.portfolioEntryDescription.content[0].content[0].value}
                  desc2={this.props.portfolioEntry.fields.portfolioEntryDescription.content[1].content[0].value}
                  link={this.props.portfolioEntry.fields.portfolioEntryLink}
                  image={this.props.portfolioEntry.fields.portfolioEntryImage.fields.file.url}
              />
            </Slide>
          </Modal>
          </div>
        ): null}
      </div>
    )
  }
}

export default PortfolioItem;