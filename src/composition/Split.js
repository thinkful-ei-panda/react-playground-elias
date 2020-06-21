import React from 'react'

export default function Split(props) {
  const combinedClassName = `split ${props.className}`;
  const newStyles = { flex: props.flexBasis };
  return (
    <div
      className={combinedClassName}
      style={newStyles}
    >
      {props.children}
    </div>
  );
}