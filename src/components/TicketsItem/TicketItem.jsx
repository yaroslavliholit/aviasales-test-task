import React from 'react';
import PropTypes from 'prop-types';

import TicketItemStep from '../TicketItemStep';

import companyLogo from '../../img/logo.png';
import airplane from '../../img/airplane.svg';

export const TicketItem = ({
  valutaData,
  price,
  departure_time,
  origin,
  origin_name,
  departure_date,
  stops,
  arrival_time,
  destination,
  destination_name,
  arrival_date
}) => {
  return (
    <li className="TicketItem">
      <div className="TicketItem__promo">
        <img src={companyLogo} alt="companyLogo"/>
        <button className="Btn">{ `Купить ${price}` }</button>
      </div>
      <div className="TicketItem__info">
        <TicketItemStep
          time={departure_time}
          cityA={origin}
          cityB={origin_name}
          date={departure_date}
        />

        <div className="Transfer">
          <p>{ stops === 0 ? null : `${stops} пересадка` }</p>
          <img src={airplane} alt="airplane"/>
        </div>

        <TicketItemStep
          time={arrival_time}
          cityA={destination}
          cityB={destination_name}
          date={arrival_date}
        />
      </div>
    </li>
  );
};

TicketItem.propTypes = {
  valutaData: PropTypes.string,
  price: PropTypes.number,
  departure_time: PropTypes.string,
  origin: PropTypes.string,
  origin_name: PropTypes.string,
  departure_date: PropTypes.string,
  stops: PropTypes.number,
  arrival_time: PropTypes.string,
  destination: PropTypes.string,
  destination_name: PropTypes.string,
  arrival_date: PropTypes.string,
};
