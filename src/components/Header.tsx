import React from 'react';
import {
    View, Text,
    ImageBackground, FlatList, StyleSheet,
    Image, SafeAreaView, TouchableOpacity,
    Platform, StatusBar
} from 'react-native';

import icons from "../assets/icons"
import { colors } from '../config/styles'
import font from '../assets/fonts';

import { getHeaderTitle } from '@react-navigation/elements'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'


const header = ({ navigation, route, options, back }: NativeStackHeaderProps): React.ReactNode => {
    const title = getHeaderTitle(options, route.name);

    return (
        <View style={{
            backgroundColor: colors.backDark,
            width: '100%',
            height: 50,
            paddingLeft: 15,
            paddingRight: 15,
            flexDirection: 'row',
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: Platform.OS === 'ios' ? 42 : 0,
        }}>
            <StatusBar backgroundColor={colors.backDark} barStyle="dark-content" />
            {back ?
                <TouchableOpacity
                    style={{ padding: 5 }}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    onPress={navigation.goBack}>
                    <icons.Back
                        fill={colors.textDark}
                    />
                </TouchableOpacity>
                : undefined
            }
            <Text style={{
                fontSize: 20,
                margin: 0,
                padding: 0,
                color: colors.textDark,
                fontFamily: font.Bold,
                textTransform: 'uppercase'
            }}>
                {title}
            </Text>
            {back ?
                <TouchableOpacity
                    style={{ padding: 5 }}
                    hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
                    onPress={navigation.goBack}>
                    <icons.Options
                        fill={colors.textDark}
                    />
                </TouchableOpacity>
                : undefined
            }
        </View>
    )
}

export default header