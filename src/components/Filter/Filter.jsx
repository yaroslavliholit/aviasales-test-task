import React from 'react';
import InputItem from '../InputItem';

const valutaInputs  = [
  { inputId: 'RUB', inputType: 'radio', inputValue: 'RUB', inputName: 'currency', labelTitle: 'RUB' },
  { inputId: 'USD', inputType: 'radio', inputValue: 'USD', inputName: 'currency', labelTitle: 'USD' },
  { inputId: 'EUR', inputType: 'radio', inputValue: 'EUR', inputName: 'currency', labelTitle: 'EUR' },
];

// const transferInputs = [
//   { inputId: 'transfer-0', inputType: 'checkbox', inputValue: '0', inputName: 'options', labelTitle: 'Без пересадок' },
//   { inputId: 'transfer-1', inputType: 'checkbox', inputValue: '1', inputName: 'options', labelTitle: '1 пересадка' },
//   { inputId: 'transfer-2', inputType: 'checkbox', inputValue: '2', inputName: 'options', labelTitle: '2 пересадки' },
//   { inputId: 'transfer-3', inputType: 'checkbox', inputValue: '3', inputName: 'options', labelTitle: '3 пересадки' },
// ];

export const Filter = () => {
  return (
    <aside className='Filters'>
      <form>
        <fieldset className='Filters__group'>
          <legend className='Filters__title'>ВАЛЮТА</legend>
          <div className='RarioGroup'>
            {
              valutaInputs.map((input, index) => {
                return (
                  <InputItem 
                    key={index}
                    wrapperClass={'RarioGroup__item'}
                    inputClass='my-awesome-checkbox'
                    inputId={input.inputId}
                    inputType={input.inputType}
                    inputValue={input.inputValue}
                    inputName={input.inputName}
                    labelTitle={input.labelTitle}
                  />
                )
              })
            }
          </div>
        </fieldset>
      </form>
    </aside>
  );
};
