import { Box, Image, Text } from '@chakra-ui/react'
import React from 'react'

export default function OfferItem() {
  return (
    <Box>
          <Box>
              <Box>
                  <Image src="" alt="" />
              </Box>
              <Box>
                  <Text as="p"></Text>
                  <Text as="p"></Text>
              </Box>
      </Box>
          <Box>
              <Text as="p"></Text>
              <Text as="p"></Text>
      </Box>
    </Box>
  )
}

const Data={
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