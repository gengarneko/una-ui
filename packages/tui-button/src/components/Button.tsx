import { tw } from 'twind';
import { ButtonOptions } from '../types';

// * --------------------------------------------------------------------------- comp

export function Button(props: ButtonOptions) {
  const { variant = 'none' } = props;

  return (
    <button type="button" className={tw`border-[1px] border-[#eee]`}>
      123123123
    </button>
  );
}
