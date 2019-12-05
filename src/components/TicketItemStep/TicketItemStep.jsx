import React from 'react';
import PropTypes from 'prop-types';

import { dateFormat } from '../../helpers/dateFormat';

export const TicketItemStep = ({time, cityA, cityB, date}) => {
  return (
    <div className="Step">
      <time>{time}</time>
      <div className="Step__city">{`${cityA}, ${cityB}`}</div>
      <div className="Step__date">{ dateFormat(date) }</div>
    </div>
  );
};

TicketItemStep.propTypes = {
  time: PropTypes.string,
  cityA: PropTypes.string,
  cityB: PropTypes.string,
  date: PropTypes.string,
};

