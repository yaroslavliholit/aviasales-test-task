import React from 'react';
import PropTypes from 'prop-types';
import TicketItem from '../TicketsItem';

export const TicketsList = ({data}) => {
  return (
    <ul className="TicketsList">
      {
        data.tickets.map((item, index) => {
          return (
            <TicketItem 
              key={index}
              // valutaData={valutaData}
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
      }
    </ul>
  );
};

TicketsList.propTypes = {
  tickets: PropTypes.object,
};
