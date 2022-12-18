import { Box, Flex, Spacer } from "@chakra-ui/layout";
import React from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
} from "@chakra-ui/react";
import {ChevronDownIcon} from "@chakra-ui/icons";
import "./Navbar2.css";

const Navbar2 = () => {
  return (
    <Box className="nav2-main">
      <Flex>
        <Box>Medicine</Box>
        <Spacer />
        <Box>Lab Tests</Box>
        <Spacer />
        <Menu>
          <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
            Actions
          </MenuButton>
          <MenuList>
            <MenuItem>Download</MenuItem>
            <MenuItem>Create a Copy</MenuItem>
            <MenuItem>Mark as Draft</MenuItem>
            <MenuItem>Delete</MenuItem>
            <MenuItem>Attend a Workshop</MenuItem>
          </MenuList>
        </Menu>
        <Spacer />
        <Box>Surgeries</Box>
        <Spacer />
        <Box>Health Blogs</Box>
        <Spacer />
        <Box>Plus</Box>
        <Spacer />
        <Box>Offers</Box>
        <Spacer />
        <Box>Value Store</Box>
      </Flex>
    </Box>
  );
};

export default Navbar2;
