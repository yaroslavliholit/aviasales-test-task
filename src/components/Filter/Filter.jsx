import React from 'react';

export const Filter = ({valutaInputs, valutaChange, transferInputs, transferChange, filterTransfer}) => {
  return (
    <aside className='Filters'>
      <form>
        <fieldset className='Filters__group'>
          <legend className='Filters__title'>Валюта</legend>
          <div className='RarioGroup'>
            {
              valutaInputs.map((input, index) => {
                return (
                  <div className='RarioGroup__item' key={input.inputValue} >
                    <input
                      className='my-awesome-checkbox'
                      id={input.inputValue}
                      type='radio'
                      value={input.inputValue}
                      name='currency'
                      defaultChecked={input.checked}
                      onChange={ () => valutaChange(index, input.inputValue) }
                    />
                    <label htmlFor={input.inputValue} > {input.inputValue} </label>
                  </div>
                )
              })
            }
          </div>
        </fieldset>
      </form>

      <form>
        <fieldset className="Filters__group">
          <legend className="Filters__title">Колличество пересадок</legend>
          {
            transferInputs.map((input, index) => {
              return (
                <div className="Transfer__group" key={input.inputId}>
                  <input
                    className='styledCheckbox'
                    id={input.inputId}
                    type='checkbox'
                    value={input.inputValue}
                    name='options'
                    defaultChecked={input.checked}
                    onChange={() => { transferChange(index, input.inputValue); filterTransfer(); } }
                  />
                  <label htmlFor={input.inputId} > {input.labelTitle} </label>
                </div>
              )
            })
          }
        </fieldset>
      </form>
    </aside>
  );
};
