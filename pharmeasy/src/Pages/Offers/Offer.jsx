import React from 'react'
import FAQ from '../Plus/FAQ';
import Code from './code';

export default function Offer() {
  return (
    <div>
      {/* <FAQ arr={offerFAQ}/> */}
      <Code/>
    </div>
  )
}
const offerFAQ=[
    {
      ques: "What are the latest offers & coupon codes applicable on PharmEasy?",
      type: 2,
      ans: [
        "Flat 25% OFF + FREE Delivery on medicines.",
        "Flat 27% OFF + FREE Delivery on medicines.",
        "Get FLAT Rs.1000 OFF on booking 2 Comprehensive Full Body checkup with Vitamin D and B12 Packages.",
        "Get FLAT Rs.550 OFF.",
        "Get FLAT Rs.350 OFF on orders above Rs 1499.",
        "Get Free Plus membership by booking any premium package.",
        "FLAT 15% OFF on medicines + up to Rs.250 cashback.",
        "Get 3000 cashback points.",
        "Buy 2 or more tests and get up to 30% cashback.",
        "Get FLAT Rs.300 cashback on PharmEasy Labtests booked above Rs.999.",
        "Buy 3 Health Checkups worth Rs. 1499 each and Pay for only 2.",
        "Get FLAT Rs.200 cashback on PharmEasy Labtests booked above Rs.699.",
        "Get Flat Rs.50 Cashback on orders above Rs.300.",
        "Get up to Rs.600 cashback via Amazon Pay.",
        "Our Phlebotomist will reach your home on time or before, otherwise you will get 100% cashback on your cart value.",
      ],
    },
    {
      ques: "How to get updates about PharmEasy offers and discounts?",
      type: 1,
      ans1: "Visit the Offers section on the PharmEasy website to explore the latest offers and discounts. You can also download the PharmEasy app from Google Play or Apple App Store to receive notifications on offers and discounts.",
    },
    {
      ques: "How do I use a coupon code on PharmEasy?",
      type: 3,
      heading: "Follow these steps to use a coupon code on PharmEasy.",
      ans: [
        "Download the PharmEasy app or visit the website.",
        "Select the products you want and add them to the cart.",
        "Visit the cart page and click on Apply Coupon.",
        "Enter the coupon code and click Apply.",
        "Proceed to checkout to avail the discount.",
      ],
    },
    {
      ques: "Do I get a special discount when ordering for the 1st time?",
      type: 1,
      ans1: "Yes, PharmEasy offers a special discount when you place your 1st order. Additionally, you also get exciting wallet offers and cashbacks.",
    },
    {
      ques: "Can I apply more than one PharmEasy coupon at the same time?",
      type: 1,
      ans1: "No, you can only apply one PharmEasy coupon at once. You can remove one coupon code and replace it with another one if you wish.",
    },
    {
      ques: "How to cancel a coupon/promo code?",
      type: 4,
      heading2: "To cancel a coupon/promo code, you have to follow these steps",
      ans: [
        "Go to the cart page.",
        "Click on 'Remove' in the coupon section to remove the coupon/promo code.",
      ],
    },
  ];