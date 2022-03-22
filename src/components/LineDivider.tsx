import React from 'react';
import {
    Text,
    TouchableOpacity,
    ActivityIndicator,
    View
} from 'react-native';
import { styleMain } from "../config/styles"
import { StyleProp, ViewStyle } from "react-native"

// }: React.ComponentProps<typeof View>
const LineDivider = (children: Array<React.ReactNode>, style: StyleProp<ViewStyle> = {}) => {
    var key = 1
    return (children?.reduce((prev, curr) => [
        prev,
        <View
            key={'LineDivider-' + (key++).toString()}
            style={[styleMain.lineDivider, style]}
        />,
        curr
    ]))
}

export default LineDivider