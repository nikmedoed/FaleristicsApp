export type HeaderRightButtons = Array<{ icon: any, action: () => void }>


export type RootStackParamList = {
    Epochs: { rightButtons: HeaderRightButtons };
    EpochTypes: {} | undefined;
    ItemDetails: {} | undefined;
    SearchNames: {} | undefined;
    Settings: {} | undefined;
    TypeItems: {} | undefined;
};

import { ImageSourcePropType } from "react-native"

export type EpochProps = {
    imageUri: ImageSourcePropType,
    locked?: boolean,
    name: string,
    years: string,
    onPress: () => void
}

import { RouteProp } from '@react-navigation/native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack'


export type NativeStackHeaderPropsCustomRight =
    NativeStackHeaderProps & {
        route: RouteProp<{
            params?: { rightButtons: HeaderRightButtons }
        }, 'params'>
    } | NativeStackHeaderProps