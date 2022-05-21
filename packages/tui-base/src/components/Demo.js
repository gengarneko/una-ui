import { jsx as _jsx } from "react/jsx-runtime";
import { useState } from 'react';
export const Comp = () => {
    return _jsx("div", { children: "12313" });
};
export const Demo = () => {
    return _jsx("div", { children: "demo" });
};
export const Test = () => {
    const [state, setState] = useState(0);
    return _jsx("div", { children: state });
};
