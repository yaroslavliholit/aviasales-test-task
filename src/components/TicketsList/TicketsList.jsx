import React from 'react';
import PropTypes from 'prop-types';
import TicketItem from '../TicketsItem';

export const TicketsList = ({data, valutaData}) => {

  return (
    <ul className="TicketsList">
      { 
        typeof data !== 'undefined' && data.length > 0
        ? data.map((item, index) => {
            return (
              <TicketItem
                valutaData={valutaData}
                key={index}
                departure_time={item.departure_time}
                origin={item.origin}
                origin_name={item.origin_name}
                departure_date={item.departure_date}
                stops={item.stops}
                arrival_time={item.arrival_time}
                destination={item.destination}
                destination_name={item.destination_name}
                arrival_date={item.arrival_date}
                price={item.price}
              />
            )
          }) 
        : <div className="emptySearch"><p>Поиск не дал результатов</p></div>
      }
    </ul>
  );
};

TicketsList.propTypes = {
  tickets: PropTypes.object,
};
