import React from "react";
import { Image, Stack, Text } from "@chakra-ui/react";
import { BsFacebook, BsInstagram, BsYoutube, BsTwitter } from "react-icons/bs";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/react";
import {
  Categories,
  Company,
  NeedHelp,
  OurServices,
  Partners,
  PolicyInfo,
} from "./FooterData";
import styles from "./footer.module.css";
import MediaQuery from "react-responsive";

const Footer = () => {
  return (
    <div className={styles.container}>
      <MediaQuery minWidth={992}>
        <Stack direction="horizontal" justify="space-between">
          <Stack gap="10px">
            <Text fontSize="16px" fontWeight="700">
              Company
            </Text>
            {Company.map((el, i) => (
              <Text key={i} fontSize="14px" fontWeight="500" cursor="pointer">
                {el.link}
              </Text>
            ))}
            <Text fontSize="16px" fontWeight="700" paddingTop="20px">
              Our Services
            </Text>
            {OurServices.map((el, i) => (
              <Text key={i} fontSize="14px" fontWeight="500" cursor="pointer">
                {el.link}
              </Text>
            ))}
          </Stack>
          <Stack gap="10px">
            <Text fontSize="16px" fontWeight="700">
              Featured Categories
            </Text>
            {Categories.map((el, i) => (
              <Text key={i} fontSize="14px" fontWeight="500" cursor="pointer">
                {el.link}
              </Text>
            ))}
          </Stack>
          <Stack gap="10px">
            <Text fontSize="16px" fontWeight="700">
              Need Help
            </Text>
            {NeedHelp.map((el, i) => (
              <Text key={i} fontSize="14px" fontWeight="500" cursor="pointer">
                {el.link}
              </Text>
            ))}
            <Text fontSize="16px" fontWeight="700" paddingTop="20px">
              Policy Info
            </Text>
            {PolicyInfo.map((el, i) => (
              <Text key={i} fontSize="14px" fontWeight="500" cursor="pointer">
                {el.link}
              </Text>
            ))}
          </Stack>
          <Stack gap="10px" marginRight="20px">
            <Text fontSize="16px" fontWeight="700">
              Follow us on
            </Text>
            <Stack direction="row" gap="25px">
              <BsInstagram
                style={{ width: "25px", height: "25px", cursor: "pointer" }}
              />
              <BsFacebook
                style={{ width: "25px", height: "25px", cursor: "pointer" }}
              />
              <BsYoutube
                style={{ width: "25px", height: "25px", cursor: "pointer" }}
              />
              <BsTwitter
                style={{ width: "25px", height: "25px", cursor: "pointer" }}
              />
            </Stack>
          </Stack>
        </Stack>
        <Stack gap="10px" marginBottom="40px" marginTop="60px">
          <Text fontSize="16px" fontWeight="700">
            Our Payment Partners
          </Text>
          <Stack direction={["row", "column"]} justify="space-between">
            <Stack
              direction="row"
              gap="40px"
              width="784px"
              height="24px">
              {Partners.map((el, i) => (
                <Image key={i} src={el.img} height="18px" />
              ))}
            </Stack>
            <Text fontSize="14px">© 2022 PharmEasy. All Rights Reserved</Text>
          </Stack>
        </Stack>
      </MediaQuery>

      {/* -------------------------------------------------Media Queries-------------------------------------------- */}

      <MediaQuery minWidth={768} maxWidth={991}>
        <Accordion allowToggle>
          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize="16px"
                  fontWeight="600">
                  Company
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {Company.map((el, i) => (
                <Text key={i} fontSize="14px" fontWeight="500" cursor="pointer">
                  {el.link}
                </Text>
              ))}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize="16px"
                  fontWeight="600">
                  Our Services
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {OurServices.map((el, i) => (
                <Text key={i} fontSize="14px" fontWeight="500" cursor="pointer">
                  {el.link}
                </Text>
              ))}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize="16px"
                  fontWeight="600">
                  Featured Categories
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {Categories.map((el, i) => (
                <Text key={i} fontSize="14px" fontWeight="500" cursor="pointer">
                  {el.link}
                </Text>
              ))}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize="16px"
                  fontWeight="600">
                  Need Help
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {NeedHelp.map((el, i) => (
                <Text key={i} fontSize="14px" fontWeight="500" cursor="pointer">
                  {el.link}
                </Text>
              ))}
            </AccordionPanel>
          </AccordionItem>

          <AccordionItem>
            <h2>
              <AccordionButton>
                <Box
                  as="span"
                  flex="1"
                  textAlign="left"
                  fontSize="16px"
                  fontWeight="600">
                  Policy Info
                </Box>
                <AccordionIcon />
              </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
              {PolicyInfo.map((el, i) => (
                <Text key={i} fontSize="14px" fontWeight="500" cursor="pointer">
                  {el.link}
                </Text>
              ))}
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
      </MediaQuery>
    </div>
  );
};

export default Footer;
