import React from 'react';
import InputItem from '../InputItem';

export const Filter = ({valutaInputs, valutaChange, transferInputs}) => {
  return (
    <aside className='Filters'>
      <form>
        <fieldset className='Filters__group'>
          <legend className='Filters__title'>ВАЛЮТА</legend>
          <div className='RarioGroup'>
            {
              valutaInputs.map((input, index) => {
                return (
                  <div className='RarioGroup__item' key={input.inputValue} >
                    <input
                      className='my-awesome-checkbox'
                      id={input.inputValue}
                      type={input.inputType || 'text'}
                      value={input.inputValue}
                      name={input.inputName}
                      defaultChecked={input.checked}
                      onChange={ () => valutaChange(index) }
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
          <legend className="Filters__title">КОЛИЧЕСТВО ПЕРЕСАДОК</legend>
          {
            transferInputs.map(input => {
              return (
                <InputItem 
                  key={input.inputId}
                  wrapperClass="Transfer__group"
                  inputClass="styledCheckbox"
                  inputId={input.inputId}
                  inputType={input.inputType}
                  inputValue={input.inputValue}
                  inputName={input.inputName}
                  labelTitle={input.labelTitle}
                  checked={input.checked}
                />
              )
            })
          }
        </fieldset>
      </form>
    </aside>
  );
};
