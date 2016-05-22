import React from 'react';
import Helmet from 'react-helmet';

import config from './helmconfig';

class Header extends React.Component {
  render() {
    return (
      <Helmet
        title="Rivanna Wood Floors LLC"
        meta={config.meta}
        link={config.link}
      />
    );
  }
}

export default Header;
