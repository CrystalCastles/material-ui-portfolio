import React from 'react';

import Layout from './components/Layout/Layout';
import PortfolioSection from './containers/PortfolioSection';

import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn } from '@fortawesome/free-solid-svg-icons'

library.add(faLinkedinIn)

function App() {
  return (
    <Layout>
      <PortfolioSection />
    </Layout>
  );
}

export default App;
