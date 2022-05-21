import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
// * --------------------------------------------------------------------------- comp
export const Button = () => {
    return _jsx("div", { children: "button test =====================" });
};
// * ---------------------------
export const Demo = () => {
    const [state, setState] = useState(0);
    return _jsx("div", Object.assign({ onClick: () => setState((prev) => prev + 1) }, { children: state }));
};
