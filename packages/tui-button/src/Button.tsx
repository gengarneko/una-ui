import { useEffect } from 'react';
import { tw } from 'twind/css';

// * --------------------------------------------------------------------------- inter

export interface ButtonProps {}

// * --------------------------------------------------------------------------- comp

export function Button(props: ButtonProps) {
  useEffect(() => {
    console.log(props);
    console.log(123123132);
  }, [props]);

  return (
    <button type="button" className={tw`flex text-[#eee]`} style={{ border: '1px solid #eee' }}>
      twind button
    </button>
  );
}
