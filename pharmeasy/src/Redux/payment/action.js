import { membership } from "./actionType"

export const handlePayment = (a) => {
    return {type:membership, payload:a}
}