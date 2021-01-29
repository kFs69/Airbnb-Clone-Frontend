import React from 'react';

interface InputProps {
  type: string;
  style?: string;
}

export const Input: React.FC<InputProps> = ({ style, ...rest }) => {
  return style ? (
    <input {...rest} value='FIRST' />
  ) : ( <input {...rest} value='NULL' /> );
}