import React from 'react';
import {
    View, Text,
    ImageBackground, FlatList, StyleSheet, Alert,
    Image, SafeAreaView, TouchableOpacity,
    Platform, StatusBar
} from 'react-native';

import { styleHeader, standartHitSlop, standartPadMar, colors } from '../config/styles'

import { getHeaderTitle } from '@react-navigation/elements'
import { HeaderRightButtons } from "../types"


import { NativeStackHeaderPropsCustomRight } from "../types"
import { NativeStackHeaderProps } from '@react-navigation/native-stack'


const header = ({
    navigation,
    route,
    options,
    back
}: NativeStackHeaderPropsCustomRight): React.ReactNode => {
    const title = getHeaderTitle(options, route.name);
    const buttons: HeaderRightButtons = route.params?.rightButtons || []
    return (
        <View style={styleHeader.back}>
            <Text style={styleHeader.title}>
                {title}
            </Text>
            <View style={styleHeader.rightButtons}            >
                {buttons.map((item, id) =>
                    <TouchableOpacity
                        key={id}
                        hitSlop={standartHitSlop}
                        onPress={item.action}
                        style={{ marginLeft: standartPadMar }}
                    >
                        <item.icon
                            width={standartPadMar}
                            fill={colors.textDark}
                        />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default header