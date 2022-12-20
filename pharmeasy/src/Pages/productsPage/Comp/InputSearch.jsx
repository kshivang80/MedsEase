import { Image, Input } from "@chakra-ui/react";

export default function InputSearch({ text, onchange, setText,placeholder}) {
  let id;
  const debounce = (cb, delay) => {
    return () => {
      id && clearTimeout(id);
      id = setTimeout(() => {
        cb();
      }, delay);
    };
  };

  const test = (e) => {
    debounce(() => onchange(e), 1000)();
  };

  return <Input   placeholder={placeholder} onChange={(e) => test(e)} />;
}
