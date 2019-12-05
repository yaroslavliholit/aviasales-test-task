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
      valutaInputs: [
        { inputType: 'radio', inputValue: 'RUB', inputName: 'currency', checked: true },
        { inputType: 'radio', inputValue: 'USD', inputName: 'currency', checked: false },
        { inputType: 'radio', inputValue: 'EUR', inputName: 'currency', checked: false },
      ],
      activeTransfers: '',
      transferInputs: [
        { inputId: 'transfer-0', inputType: 'checkbox', inputValue: '0', inputName: 'options', labelTitle: 'Без пересадок', checked: true },
        { inputId: 'transfer-1', inputType: 'checkbox', inputValue: '1', inputName: 'options', labelTitle: '1 пересадка', checked: true },
        { inputId: 'transfer-2', inputType: 'checkbox', inputValue: '2', inputName: 'options', labelTitle: '2 пересадки', checked: true },
        { inputId: 'transfer-3', inputType: 'checkbox', inputValue: '3', inputName: 'options', labelTitle: '3 пересадки', checked: true },
      ]
    };
  }

  /**
   * Метод changeValutaHandler получает индекс radio-элемента (valutaInputs)
   * Событие происходит в компоненте Filter в методе .map()
   * 
   * Копирую состояние массива valutaInputs 
   * 
   * Исспользвую цикл forEach для того что бы поменять флаг checked у всех елементов массива
   * Если индекс текущего елемента в forEach совпадает с полученым индексом из обработчика changeValutaHandler
   * этому элементу устанавливаем checked в - true
   * 
   * Меняем стейт на новый массив с "актуальным" флагом checked
   */

  changeValutaHandler = index => {
    const valutaInputsState = [...this.state.valutaInputs];
    valutaInputsState.forEach((e, num) => {
      if (num !== index ) {
        valutaInputsState[num].checked = false;
      } else {
        valutaInputsState[num].checked = true;
      }
    });

    this.setState({
      valutaInputs: valutaInputsState,
    });
  }

  render() {
    return (
      <div className="App Main">
        <Logo src={logo} />
        <div className="MainContent">
          <Filter
            valutaChange={this.changeValutaHandler}
            valutaInputs={this.state.valutaInputs} 
            transferInputs={this.state.transferInputs} 
          />
          <TicketsList data={data} />
        </div>
      </div>
    )
  }
}
