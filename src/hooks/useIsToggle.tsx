import {useState} from "react";

export const useToggle = (
    initialValue: boolean = false
): [boolean, () => void, (value: boolean) => void] => {
    const [value, setValue] = useState(initialValue);

    const toggle = () => setValue((prev) => !prev);
    const set = (newValue: boolean) => setValue(newValue);

    return [value, toggle, set];
};
