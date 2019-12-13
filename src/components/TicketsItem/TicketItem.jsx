import React from 'react';
import PropTypes from 'prop-types';
import TicketItemStep from '../TicketItemStep';
import { transferFormatter } from '../../helpers/transferFormatter';
import companyLogo from '../../img/logo.png';
import airplane from '../../img/airplane.svg';

const findActiveValuta = valutaData => {
  let activeValuta = null;
  valutaData.forEach(valuta => {
    if ( valuta.checked === true ) activeValuta = valuta;
  });

  return activeValuta;
}

const setupPrice = (price, valutaData) => Math.round(price / findActiveValuta(valutaData).rates);

const setupIconPrice = valutaData => findActiveValuta(valutaData).ico;

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
        <button className="Btn">
          Купить
          <span className="BtnPrice">
            {`за ${ setupPrice(price, valutaData) }`}
            <img className="ValutaIcon" src={setupIconPrice(valutaData)} alt="Icon Price"/>
          </span>
        </button>
      </div>

      <div className="TicketItem__info">
        <TicketItemStep
          time={departure_time}
          cityA={origin}
          cityB={origin_name}
          date={departure_date} />

        <div className="Transfer">
          <p>{ stops === 0 ? null : `${stops} ${transferFormatter(stops)}` }</p>
          <img src={airplane} alt="airplane"/>
        </div>

        <TicketItemStep
          time={arrival_time}
          cityA={destination}
          cityB={destination_name}
          date={arrival_date} />
      </div>
    </li>
  );
};

TicketItem.propTypes = {
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
