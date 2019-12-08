import React from 'react';
import PropTypes from 'prop-types'

export const Header = ({src}) => {
  return (
    <header className="Logo">
      <img src={src} alt="Logo"/>
    </header>
  );
};

Header.propTypes = {
  src: PropTypes.string,
};
