import React from 'react';
import PropTypes from 'prop-types'

export const Logo = ({src}) => {
  return (
    <div className="Logo">
      <img src={src} alt="Logo"/>
    </div>
  );
};

Logo.propTypes = {
  src: PropTypes.string,
};
