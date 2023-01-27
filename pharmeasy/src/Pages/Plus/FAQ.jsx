import React from "react";
import Styles from "./FAQ.module.css";
import { AiOutlineDown, AiOutlineUp } from "react-icons/ai";
import { useState } from "react";
export default function FAQ({arr}) {
  const [content, setContent] = useState(null);
  function allContent(i) {
    if (content === i) {
      return setContent(null);
    }
    setContent(i);
  }
  return (
    <div>
      <div className={Styles.ques}>
        {arr.map((elem, index) => {
          return (
            <div className={Styles.FAQ}>
              <div className={Styles.title} onClick={() => allContent(index)}>
                <h4>{elem.ques}</h4>
                {content === index ? (
                  <AiOutlineUp className={Styles.icon} />
                ) : (
                  <AiOutlineDown className={Styles.icon} />
                )}
              </div>
              <div
                className={
                  content === index ? `${Styles.ans} ${Styles.show}` : Styles.ans
                }
              >
                {elem.type===1 ? <p>{elem.ans1}</p>:elem.type===2 ? <ul>{elem.ans.map((el)=>{return <li>{el}</li>})}</ul>:<>{elem.type===3 ? <><p>{elem.heading}</p><ol>{elem.ans.map((e)=>{return <li>{e}</li>})}</ol></>:<><p>{elem.heading2}</p><ul>{elem.ans.map((e)=>{return <li>{e}</li>})}</ul></>}
               </> }
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}


// const arr = [
//   {
//     ques: "What are the benefits of PharmEasy Plus?",
//     type: 1,
//     ans1: "Plus members get extra 5% cashback on allopathic medicine orders with free delivery above ₹499 and extra 50% cashback on diagnostics orders along with free doctor teleconsultations.",
//   },
//   {
//     ques: "Does Plus extra cashback apply on Healthcare products as well?",
//     type: 1,
//     ans1: "No, 5% extra cashback for Plus members is applicable only on allopathic medicines and not on other healthcare products.",
//   },
//   {
//     ques: "How long is my PharmEasy Plus membership valid for?",
//     type: 1,
//     ans1: "Your PharmEasy Plus membership is valid for 2 months from the date of purchase of the program.",
//   },
//   {
//     ques: "When will|get the cashback?",
//     type: 1,
//     ans1: "Cashback will be credited into your PharmEasy wallet within 48 hours of order delivery.",
//   },
//   {
//     ques: "What is the validity of the cashback?",
//     type: 1,
//     ans1: "Cashback earned through the PharmEasy Plus Membership will expire in 60 days.",
//   },
//   {
//     ques: "Is there a cap on the maximum cashback amount that can be used on Medicine orders?",
//     type: 1,
//     ans1: "Yes, wallet cashback usage is capped at a maximum of 5% of the order value for Medicine orders.",
//   },
//   {
//     ques: "Is there a cap on the maximum cashback amount that can be used on Diagnostics Tests?",
//     type: 1,
//     ans1: "No, you can use the complete wallet cashback balance on your Diagnostic Test.",
//   },
//   {
//     ques: "Is there a cap on the maximum amount that can be earned through the 5% cashback on Medicine orders?",
//     type: 1,
//     ans1: "Yes, based on the value of your order, a 5% cashback up to ₹200 will be credited for Medicine orders.",
//   },
//   {
//     ques: "Is there also a new 40% Cashback on lab tests, over and above the existing 10% cashback?",
//     type: 1,
//     ans1: "Absolutely! All Plus members will continue to get the older benefit of 10% Cashback without using a coupon on their lab test bookings. You will now also be able to get a 40% additional cashback by using the code shown on your cart at the time of booking.",
//   },
//   {
//     ques: "Is there a cap on the maximum amount that can be earned through the 10% cashback on Diagnostic Tests?",
//     type: 1,
//     ans1: "Yes, based on the value of your order, a 10% cashback up to ₹200 will be credited for Diagnostic Test orders.",
//   },
//   {
//     ques: "Is there a cap on the maximum amount that can be earned through the 40% cashback on Lab Tests applied via coupon?",
//     type: 1,
//     ans1: "Yes, based on the value of your order, a 40% cashback up to ₹2000 will be credited for Lab Test orders.",
//   },
//   {
//     ques: "Is free delivery applicable for all orders?",
//     type: 1,
//     ans1: "Free delivery will apply to the first 50 medicine orders you place via standard delivery during your membership period. The cart value for each order has to be above ₹499/- to qualify for free delivery. For priority delivery, extra charges will be applied. Certain packaging charges may also apply to PLUS orders. However, in cases where your order weighs more than 1 kg, standard delivery (based on the weight of your order) will be applicable. ",
//   },
//   {
//     ques: "Are charges applicable on returns?",
//     type: 1,
//     ans1: "Extra charges may be applied to subsequent or future orders when customers make frequent return orders.",
//   },
//   {
//     ques: "Can I cancel my PharmEasy Plus Membership?",
//     type: 1,
//     ans1: "No. Once enrolled, you will not be able to cancel your PharmEasy Plus membership.",
//   },
//   {
//     ques: "Can I renew my PharmEasy Plus membership?",
//     type: 1,
//     ans1: "Yes, once your existing membership has expired, you will see an option to buy the membership again if you are eligible. However, PharmEasy Plus membership prices are subject to change.",
//   },
//   {
//     ques: "Can I use other offers/coupons along with the Pharm Easy Plus Cashback?",
//     type: 1,
//     ans1: "Yes, you can use any other offers/coupons along with the PharmEasy Plus membership.",
//   },
//   {
//     ques: "How do I avail Pharm Easy Plus cashback?",
//     type: 1,
//     ans1: "Cashback will be auto-applied on all allopathic medicine orders. No need to apply any coupon code. To avail benefits for Lab bookings, apply the coupon code shown exclusively to you on your cart to get the additional 40% Cashback on your order.",
//   },
//   {
//     ques: "Is there a limit on the number of orders I can get PharmEasy Plus Cashback on?",
//     type: 1,
//     ans1: "Yes, this benefit is available on a maximum of 50 medicine orders and 50 lab tests booked during your membership.",
//   },
//   {
//     ques: "How many Doctor Consultations can I avail through PharmEasy Plus Membership?",
//     type: 1,
//     ans1: "As a Plus member, you can avail 20 free doctor consultations during your membership period. Feel free to get in touch with our doctors whenever you are in need. We strongly advise that you take any medication only after consulting with a registered medical practitioner.",
//   },
//   {
//     ques: "What's the process for consulting the doctor?",
//     type: 1,
//     ans1: "You can submit a request for doctor consultation after getting enrolled from your membership details page.",
//   },
//   {
//     ques: "Can I get a faster delivery through PharmEasy Plus?",
//     type: 1,
//     ans1: "While we would love to provide faster delivery, this option is not available under the PharmEasy Plus membership right now.",
//   },
//   {
//     ques: "Can I buy PharmEasy Plus via COD?",
//     type: 1,
//     ans1: "Yes, you can buy the PharmEasy Plus membership via COD only if you buy it along with your medicine order. For COD order, first add your medicines to cart and then select the Plus membership.",
//   },
//   {
//     ques: "Can I avail the cashback on Diagnostics tests in all cities?",
//     type: 1,
//     ans1: "We are expanding rapidly. For now, you can avail this cashback only if our diagnostic services are available in your city.",
//   },
//   {
//     ques: "Are there any products where plus benefits are not eligible?",
//     type: 1,
//     ans1: "Cashback benefits are not applicable on healthcare products.",
//   },
//   {
//     ques: "Can PharmEasy revoke my membership at any time?",
//     type: 1,
//     ans1: "Yes, PharmEasy reserves the right, at its sole discretion, to add/alter/modify/change the terms or revoke your Plus membership with no prior notice at any given time.",
//   },
//   {
//     ques: "Will I get a refund if Pharm Easy revokes my membership?",
//     type: 1,
//     ans1: "Yes, your PLUS membership fee will be reimbursed on a pro-rata basis for the remaining months.",
//   },
//   {
//     ques: "Can my membership expire sooner than its expiry date?",
//     type: 1,
//     ans1: "PharmEasy reserves the right to revoke your Plus membership without any prior notice, if any fraudulent or suspicious activities have occurred from your membership account.",
//   },
// ];