import React, { Component } from 'react';
import Header from '../Header';
import Filter from '../Filter';
import TicketsList from '../TicketsList';
import Loader from '../Loader'
import { sortingArray } from '../../helpers/sortingArray';
import { http } from '../../services/http';
import logo from '../../img/logo.svg';
import RUB from '../../img/rub.svg';
import EUR from '../../img/eur.svg';
import USD from '../../img/usd.svg';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      ticketsList: [],
      valutaInputs: [
        { inputValue: 'RUB', checked: true, ico: RUB, rates: 1 },
        { inputValue: 'USD', checked: false, ico: USD, rates: 63 },
        { inputValue: 'EUR', checked: false, ico: EUR, rates: 70 },
      ],
      transferInputs: [
        // { inputId: 'transfer-all', inputValue: 'all', labelTitle: 'Все', checked: true },
        { inputId: 'transfer-0', inputValue: 0, labelTitle: 'Без пересадок', checked: true },
        { inputId: 'transfer-1', inputValue: 1, labelTitle: '1 пересадка', checked: true },
        { inputId: 'transfer-2', inputValue: 2, labelTitle: '2 пересадки', checked: true },
        { inputId: 'transfer-3', inputValue: 3, labelTitle: '3 пересадки', checked: true },
      ],
    };
  }

  /**
   * Метод changeValutaHandler получает индекс radio-элемента (valutaInputs)
   * Исспользвую цикл forEach для того что бы поменять флаг checked у всех елементов массива
   * Если индекс текущего елемента в forEach совпадает с полученым индексом из обработчика changeValutaHandler
   * этому элементу устанавливаем checked в - true
   */

  changeValutaHandler = index => {
    const valutaInputsState = [...this.state.valutaInputs];
    valutaInputsState.forEach((e, num) => {
      if (num !== index) {
        valutaInputsState[num].checked = false;
      } else {
        valutaInputsState[num].checked = true;
      }
    });

    this.setState({
      valutaInputs: valutaInputsState,
    });
  }

  /**
   * Получаем "index" с события changeTransferHandler
   * Инвертируем значение checked в элементе массива transferInputs по полученому индексу
   */

  changeTransferHandler = (index, valueData) => {
    const transferInputsState = [...this.state.transferInputs];
    transferInputsState.forEach((item, num) => {
      if ( num === index) {
        transferInputsState[num].checked = !transferInputsState[num].checked;
      }
    });

    this.setState({
      transferInputs: transferInputsState
    });
  }

  filterTicketsHandler = () => {
    if ( this.state.isLoading === false ) {
      const filteredTicketsList = this.state.ticketsList.filter(
        ticket => this.state.transferInputs[ticket.stops].checked
      );
      return sortingArray(filteredTicketsList);
    }
  };

  componentDidMount() {
    http('http://localhost:3000/data/tickets.json')
      .then(data => {
        this.setState({
          ticketsList: sortingArray(data.tickets),
          isLoading: false,
        });
      });
  }

  render() {
    return (
      <div className="App Main">
        <Loader loading={this.state.isLoading} />
        <Header src={logo} />
        <main className="MainContent">
          <h1 className="visually-hidden">aviasales-test-task</h1>
          <Filter
            valutaInputs={this.state.valutaInputs}
            valutaChange={this.changeValutaHandler}
            transferInputs={this.state.transferInputs}
            transferChange={this.changeTransferHandler}
            filterTransfer={this.filterTicketsHandler}
          />
          <TicketsList
            valutaData={this.state.valutaInputs}
            data={this.filterTicketsHandler()}
          />
        </main>
      </div>
    )
  }
}
