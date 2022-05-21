import { FC, useState } from 'react';

// * --------------------------------------------------------------------------- comp

export const Button: FC = () => {
  return <div>button test =====================</div>;
};

// * ---------------------------

export const Demo = () => {
  const [state, setState] = useState(0);
  return <div onClick={() => setState((prev) => prev + 1)}>{state}</div>;
};
