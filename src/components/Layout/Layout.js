import React from 'react';

import classes from './Layout.css';
import NavBar from '../Navigation/NavBar/NavBar';
import Footer from '../Navigation/Footer/Footer';
import Auxiliary from '../../hoc/Auxiliary';

const layout = ( props ) => {
  return (
    <Auxiliary>
      <NavBar />
      <main>
        {props.children}
      </main>
      <Footer />
    </Auxiliary>
  )
}

export default layout;