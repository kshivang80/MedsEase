import { Image, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { ArrowRightIcon, PhoneIcon, Search2Icon, SearchIcon } from '@chakra-ui/icons'

export default function InputSearch({ text, onchange, setText, placeholder }) {
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

  return <>
    <InputGroup>
      <InputRightElement
        pointerEvents='none'
        children={<Search2Icon color='gray.500' marginTop="-5px" style={{height:"30px", width:"20px"}} />}
      />
      <Input type='tel'  size='md' width="350px" placeholder={placeholder} onChange={(e) => test(e)} />
    </InputGroup>
    {/* <Input placeholder={placeholder} onChange={(e) => test(e)} /> */}
  </>;
}
