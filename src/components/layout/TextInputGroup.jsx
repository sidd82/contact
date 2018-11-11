import React from 'react';
import classnames from 'classnames';

const TextInputGroup = ({
    lable,
    type,
    name,
    placeholder,
    value,
    onChange,
    error
}) => {
  return (
    <div className="form-group">
        <label htmlFor={name}>{lable}</label>
        <input 
            type={type}
            name={name}
            className={classnames('form-control form-control-lg', {
                'is-invalid': error 
            })}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
        />
        {error && <div className="invalid-feedback">{error}</div>}
    </div>
    
  )
}

TextInputGroup.defaultProps = {
    type: 'text'
}
export default TextInputGroup;
