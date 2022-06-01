import { useEffect } from 'react';

// * --------------------------------------------------------------------------- inter

export interface ButtonProps {}

// * --------------------------------------------------------------------------- comp

export const Button = (props: ButtonProps) => {
  useEffect(() => {
    console.log(123123132);
  }, []);

  return <button>123123123</button>;
};
