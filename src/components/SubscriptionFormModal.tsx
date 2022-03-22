import React from "react";
import {
    Modal,
    TouchableOpacity,
    View
} from "react-native";

import icons from "../assets/icons"
import { styleMain, colors, standartPadMar, styleEpoch } from "../config/styles";
import { ActionListFormModalProps } from "../types";
import ActionListForm from "./SubscriptionList";


// TODO indicator to center (flex) при пустом списке тарифов
const ActionListFormModal = ({ visible, options, onRequestClose }: ActionListFormModalProps) => {

    return (

        <Modal
            animationType="fade"
            transparent={true}
            visible={visible}
            onRequestClose={onRequestClose}
        >
            <View
                style={{
                    ...styleMain.fullScreen,
                    ...styleMain.centered,
                    ...styleMain.modalBack,
                }}
            >
                <TouchableOpacity
                    style={{ ...styleMain.fullScreen, opacity: 0 }}
                    onPress={onRequestClose}
                />
                <ActionListForm options={options} >
                    <TouchableOpacity
                        onPress={onRequestClose}
                        style={styleEpoch.closeButton}
                    >
                        <icons.Close
                            style={{ alignSelf: "center" }}
                            stroke={colors.stroke}
                            strokeWidth={1}
                            fill={colors.accentDark}
                            width={standartPadMar * 1.5}
                            height={standartPadMar * 1.5}
                        />

                    </TouchableOpacity>
                </ActionListForm>
            </View>
        </Modal >
    )
}


export default ActionListFormModal