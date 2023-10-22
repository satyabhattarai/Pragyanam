import "../../css/component.css";

import React from 'react'

const Button = ({icon,text,additionalClass}) => {
  return (
    <button className={`button ${additionalClass}`}>
      {icon&&<img src={icon} alt="button icon" />}
      <h6 className="bold">{text}</h6>
    </button>
  );
}

export default Button
