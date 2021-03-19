import React, {useState} from 'react';

type ButtonType = {
    primTitle?: string;
    secTitle?: string;
  };
  
  type ToggleButtonType = {
    toggle?: () => void;
    toggleStatus?: boolean;
  };

const withToggle = <ButtonType extends ToggleButtonType>(
    PassesComponent: React.ComponentType<ButtonType>
  ) => {
    return (props: ButtonType) => {
      const [toggleStatus, toggle] = useState(false);
      return (
        <PassesComponent
          {...props}
          toggleStatus={toggleStatus}
          toggle={() => toggle(!toggleStatus)}
        />
      );
    };
  };

export default withToggle;