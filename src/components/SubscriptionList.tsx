import React from 'react';
import {
    Text,
    TouchableOpacity,
    ActivityIndicator,
    View
} from 'react-native';
import { colors, styleText, styleMain, styleMisc } from "../config/styles"
import { ActionListFormProps } from "../types"
import LineDivider from './LineDivider';


const ActionListForm = ({ options, children }: ActionListFormProps) => {

    var key = 1
    const opacityStep = 0.55 / options.length
    return (
        <View style={styleMain.card}>
            {options.length > 0
                ? LineDivider(options.map<React.ReactNode>((item, position) => (
                    <View
                        key={'ActionListLineItem' + position}
                        style={styleMisc.optionsLine}
                    >
                        <Text style={styleText.infoParagraph}>
                            {item.name}
                        </Text>
                        <TouchableOpacity
                            style={styleMisc.optionsButton}
                            onPress={item.action}
                        >
                            <View
                                style={[
                                    styleMisc.optionsButtonBackdround,
                                    {
                                        opacity: 0.45 + position * opacityStep
                                    }]} />
                            <Text style={styleText.button}>{item.button}</Text>
                        </TouchableOpacity>
                    </View>
                )))
                : <ActivityIndicator size="large" color={colors.accentDark} />
            }
            {children}
        </View>
    )
}

export default ActionListForm