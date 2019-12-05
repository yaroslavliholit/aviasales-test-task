import React, { Component } from 'react';
import data from '../../data/tickets.json';
import Logo from '../Logo';
import Filter from '../Filter';
import TicketsList from '../TicketsList';
import logo from '../../img/logo.svg';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeValuta: '',
    };
  }

  render() {
    return (
      <div className="App Main">
        <Logo src={logo} />
        <div className="MainContent">
          <Filter />
          <TicketsList data={data} />
        </div>
      </div>
    )
  }
}
