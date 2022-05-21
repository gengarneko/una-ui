import { FC, useEffect, useState } from 'react';

export const Comp: FC = () => {
  return <div>12313</div>;
};

export const Demo: FC = () => {
  return <div>demo</div>;
};

export const Test = () => {
  const [state, setState] = useState(0);
  return <div>{state}</div>;
};
