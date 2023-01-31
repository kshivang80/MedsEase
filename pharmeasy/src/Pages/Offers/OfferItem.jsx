import { Box, Image, Text, useToast } from '@chakra-ui/react'
import React from 'react'
import styles from "./OfferItems.module.css"
import { IoIosArrowForward } from "react-icons/io"
import copy from "copy-to-clipboard"

export default function OfferItem({Data}) {
  const toast=useToast()
  const copyToClipboard = (copyCode) => {
    copy(copyCode);
    // alert(`You have copied "${copyCode}"`);
    toast({
      title: 'You have copied',
      description: copyCode,
      status: 'success',
      duration: 1000,
      isClosable: true,
      position: 'top'
    })
  }
  
  return (
    <Box className={styles.offerItem}>
          <Box className={styles.offerItem1}>
              <Box>
                  <Image src={Data.img} alt="" />
              </Box>
              <Box>
          <Text as="p">{Data.title}</Text>
          <Text as="p">{Data.content}</Text>
        </Box>
        <Box width="fit-content"><IoIosArrowForward className={styles.icon} size={25} fill="teal"/></Box>
      </Box>
          <Box className={styles.offerItem2}>
        <Box borderBottom="1px dashed"></Box>
        <Box display="flex">
        {Data.code==="No Code Required" ?<><Text as="p">{Data.code}</Text>
              <Text as="p">Continue</Text></>: 
        <><Text as="p">Code: <span style={{color:"black", fontWeight:700}}>{Data.code}</span></Text>
              <Text as="p" onClick={()=>copyToClipboard(Data.code)}>Copy Code</Text></>}
      </Box></Box>
    </Box>
  )
}

const Data1={
    id: 1,
    title: "FLAT 15% OFF on medicines + up to Rs.250 cashback",
    content:
      "Get FLAT 15% OFF on medicines + up to Rs.500 cashback via CRED Pay UPI.",
    img: "https://cms-contents.pharmeasy.in/offer/23881b129f7-LOGO.jpg",
    code: "No Code Required",
    Eligibility: [
      "This offer can be availed twice per user in the offer period. 25th November - 2oth December",
      "This offer is not applicable to payments made for diagnostics orders",
      "This offer cannot be clubbed with any other offer",
      "Can be used only once during the offer period per card",
      "Offer valid only on successful transactions, not valid on canceled orders.",
    ],
    Get: [
      "You have to go to the Pharmeasy app, select the products of your choice & make the payment using Cred UPI",
      "This offer is valid on minimum transaction of Rs. 999",
      "The offer can be availed twice per user in the offer period.",
      "The payment option is available on android device only",
      "Offer valid between 25th Nov - 20th Dec 2022",
      "The cashback will be in cred balance after completing the payment.",
      "Offer is valid only on online orders made on the Pharmeasy app using Cred UPI.",
    ],
    Condition: [
      "User will not be eligible for the discount if the order is cancelled.",
      "No instant discount is applicable in case of full refunds or cancellation of orders.",
    ],
    other: [
      "This offer can be availed twice per user in the offer period. 25th November - 2oth December",
      "If the customer has multiple accounts (user profile/registered numbers) on PharmEasy, they can avail of this offer only on one account per card.",
      "This offer is not applicable to payments made for diagnostics orders",
      "Only users who complete payment of orders placed within the offer period of 25th November - 2oth December qualify for the offer",
      "This offer cannot be clubbed with any other offer",
      "Offer valid only on successful transactions, not valid on canceled orders",
      "This offer is non-transferable, non-negotiable, and non-encashable.",
      "Any participation by a user in the offer is voluntary.",
      "Any user who has availed of the offer shall be deemed to have read and understood these terms and conditions and PharmEasy's terms and conditions.",
      "PharmEasy reserves the right to disqualify a user from availing of the offer.",
    ],
    type: "Payment",
    required: false,
  }