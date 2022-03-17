import React from 'react';
import {
    View, Text,
    ImageBackground, FlatList, StyleSheet,
    Image, SafeAreaView, TouchableOpacity,
    Platform, StatusBar
} from 'react-native';

import icons from "../assets/icons"
import { styleHeader, standartHitSlop, standartPadMar, colors } from '../config/styles'

import { getHeaderTitle } from '@react-navigation/elements'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'


const header = ({ navigation, route, options, back }: NativeStackHeaderProps): React.ReactNode => {
    const title = getHeaderTitle(options, route.name);

    return (
        <View style={styleHeader.back}>
            {back ?
                <TouchableOpacity
                    hitSlop={standartHitSlop}
                    onPress={navigation.goBack}>
                    <icons.Back
                        width={standartPadMar}
                        fill={colors.textDark}
                    />
                </TouchableOpacity>
                : undefined
            }
            <Text style={styleHeader.title}>
                {title}
            </Text>
            {back ?
                <TouchableOpacity
                    hitSlop={standartHitSlop}
                    onPress={navigation.goBack}>
                    <icons.Options
                        width={standartPadMar}
                        fill={colors.textDark}
                    />
                </TouchableOpacity>
                : undefined
            }
        </View>
    )
}

export default header