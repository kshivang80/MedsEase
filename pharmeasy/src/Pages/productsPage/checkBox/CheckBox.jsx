import { Checkbox } from "@chakra-ui/react";

export default function CheckBox({
  size = "md",
  colorScheme = "green",
  border = "blue",
  onchange,
  value,
  ckvalue,
  def,
}) {
  return (
    <Checkbox
      defaultChecked={def}
      isChecked={ckvalue}
      size={size}
      colorScheme={colorScheme}
      border={border}
      value={value}
      onChange={onchange}
    ></Checkbox>
  );
}
