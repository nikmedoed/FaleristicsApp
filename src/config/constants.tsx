import { Alert } from "react-native"
import { ActionListItemProps } from "../types"

export const techMail = "nikmedoed@gmail.com"
export const appShareLink = "https://t.me/etonikmedoed"



export function alertNotImplemented() {
    Alert.alert("not implemented")
}

export const productlist: Array<ActionListItemProps> = [
    { name: 'Подписка на 3 месяца', button: "99 руб.", action: alertNotImplemented },
    { name: 'Подписка на 6 месяцев', button: "149 руб.", action: alertNotImplemented },
    { name: 'Подписка на 1 год', button: "299 руб.", action: alertNotImplemented }
]

