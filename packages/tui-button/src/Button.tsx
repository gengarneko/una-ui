import { useEffect } from 'react';

// * --------------------------------------------------------------------------- inter

export interface ButtonProps {}

// * --------------------------------------------------------------------------- comp

export function Button(props: ButtonProps) {
  useEffect(() => {
    console.log(props);
    console.log(123123132);
  }, [props]);

  return <button type="button">123123123</button>;
}
