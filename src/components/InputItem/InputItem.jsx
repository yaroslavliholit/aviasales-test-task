import React from 'react';
import PropTypes from 'prop-types';

export const InputItem = ({ 
  wrapperClass,
  inputClass,
  inputId,
  inputType,
  inputValue,
  inputName,
  labelTitle }) => {
  return (
    <div className={wrapperClass }>
      <input
        className={inputClass}
        id={inputId}
        type={inputType || 'text'}
        value={inputValue}
        name={inputName}
      />
      <label htmlFor={inputId} > {labelTitle} </label>
    </div>
  );
};

InputItem.propTypes = {
  wrapperClass: PropTypes.string,
  inputClass: PropTypes.string,
  inputId: PropTypes.string,
  inputType: PropTypes.string,
  inputValue: PropTypes.string,
  inputName: PropTypes.string,
  defaultChecked: PropTypes.string,
  labelTitle: PropTypes.string,
};
