import React from 'react';
import './toolTip.scss';

export const Tooltip = (props: any) => {
  let timeout: any;
  const [active, setActive] = React.useState(false);

  const showTip = () => {
    timeout = setTimeout(() => {
      setActive(true);
    }, props.delay || 400);
  };

  const hideTip = () => {
    clearInterval(timeout);
    setActive(false);
  };

  return (
    <div
      className="Tooltip-Wrapper"
      onMouseEnter={showTip}
      onMouseLeave={hideTip}
    >
      {props.children}
      {active && (
        <div
          className={`Tooltip-Tip ${props.direction || 'top'}`}
          style={{
            color: props.style.color,
            background: props.style.background,
            width: props.style.width,
            '--tooltip-background-color': props.style.background,
          }}
        >
          {props.content}
        </div>
      )}
    </div>
  );
};
