import React, { useRef, useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Box,
} from "@chakra-ui/react";
import { FcHome, FcShipped, FcTodoList } from "react-icons/fc";
import axios from "axios";
import { MdKeyboardArrowDown } from "react-icons/md";
import styles from "../Navbar/navbar.module.css";

const data = [
  {
    icon: <FcHome style={{ width: "40px", height: "40px" }} />,
    para: "Login to View Addresses",
    color: "#37857e",
    bg: "white",
    weight: "700",
    border: "#f5f5f5",
  },
  {
    icon: <FcShipped style={{ width: "40px", height: "40px" }} />,
    para: "Serving more than 1,000 towns and cities in India.",
    color: "black",
    bg: "#eff4fe",
    border: "#eff4fe",
  },
  {
    icon: <FcTodoList style={{ width: "40px", height: "40px" }} />,
    para: "Over 30,00,000 orders safely delivered",
    color: "black",
    bg: "#cef8fd",
    border: "#cef8fd",
  },
];

const Pincode = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const [pin, setPin] = useState();
  const [text, setText] = useState("Select Pincode");

  const searchCity = async () => {
    let res = await axios.get(`https://api.postalpincode.in/pincode/${pin}`);
    onClose();
    setText(`${pin} ${res.data[0].PostOffice[0].District}`);
    console.log(res.data[0].PostOffice[0].District);
  };

  return (
    <div onClick={onOpen} style={{ display: "flex", alignItems: "center" }}>
      <div>
      {text === "Select Pincode" ? (
        <Button
          ref={btnRef}
          color="gray.700"
          // onClick={onOpen}
          variant="ghost"
          bg="white"
          height="40px"
          borderTopEndRadius="none"
          borderBottomEndRadius="none"
          >
            {text}
      <MdKeyboardArrowDown className={styles.downArrowIcon} />
        </Button>
      ) : (
        <Button
          ref={btnRef}
          color="#30363c"
          // onClick={onOpen}
          variant="ghost"
              bg="white"
              display="flex"
          height="40px"
          fontSize={"14px"}
          noOfLines={2}
              alignItems="center"
          borderTopEndRadius="none"
          borderBottomEndRadius="none"
          textAlign="left"
          fontWeight={"500"}>
          <span
            style={{ fontSize: "12px", color: "#4F585E", fontWeight: "400" }}>
            Delivery to
              </span>
      {/* <MdKeyboardArrowDown className={styles.downArrowIcon} /> */}
          <br />
          {text}
        </Button>
      )}
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size="sm">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton
            marginRight="436px"
            style={{
              backgroundColor: "white",
              padding: "30px",
              border: "none",
              color: "#767676",
              marginTop: "20px",
              borderRadius: "0px",
            }}
          />
          <DrawerHeader
            style={{
              fontSize: "29px",
              fontWeight: "700",
              color: "rgb(71, 71, 71)",
              marginTop: "40px",
            }}>
            Choose your <br /> Location
          </DrawerHeader>

          <DrawerBody>
            <InputGroup>
              <Input
                height="50px"
                borderColor="#767676"
                placeholder="Enter PIN Code"
                borderRadius="8px"
                onChange={(e) => setPin(e.target.value)}
              />
              <InputRightElement height="50px" width="140px">
                <Button
                  bg="#37857e"
                  size="md"
                  height="50px"
                  width="140px"
                  borderLeftRadius="none"
                  color="white"
                  fontSize="14px"
                  fontWeight="800"
                  onClick={searchCity}
                >
                  Check
                </Button>
              </InputRightElement>
            </InputGroup>
            <Stack gap="20px" style={{ marginTop: "20px" }}>
              {data.map((el, i) => (
                <Box
                  key={i}
                  border="1px solid"
                  borderColor={el.border}
                  borderRadius="10px"
                  style={{ padding: "30px" }}
                  bg={el.bg}>
                  <Stack direction="horizontal" gap="30px" alignItems="center">
                    <Box>{el.icon}</Box>
                    <Box
                      color={el.color}
                      fontWeight={el.weight}
                      fontSize="14px">
                      {el.para}
                    </Box>
                  </Stack>
                </Box>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
      </div>
      {/* <MdKeyboardArrowDown className={styles.downArrowIcon} /> */}
    </div>
  );
};

export default Pincode;
