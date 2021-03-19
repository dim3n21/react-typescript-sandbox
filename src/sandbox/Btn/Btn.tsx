import React from 'react';
import withToggle from './withToggle';

const Button = ({ primTitle, secTitle, toggle, toggleStatus }: any) => {
    return (
      <button onClick={toggle}>{!toggleStatus ? primTitle : secTitle}</button>
    );
  };

export default withToggle(Button);