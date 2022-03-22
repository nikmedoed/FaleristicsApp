import { StyleSheet } from "react-native";
import { ImageSourcePropType, StyleProp, ViewStyle } from "react-native"
import { RouteProp } from '@react-navigation/native';
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { SvgProps } from "react-native-svg";
import icons from "./assets/icons";


export type HeaderRightButtons = Array<{
    icon: React.FC<SvgProps>,
    action: () => void
}>


export type RootStackParamList = {
    Epochs: { rightButtons: HeaderRightButtons };
    EpochTypes: {} | undefined;
    ItemDetails: {} | undefined;
    SearchNames: {} | undefined;
    Settings: {} | undefined;
    TypeItems: {} | undefined;
};


export type EpochProps = {
    imageUri: ImageSourcePropType,
    locked?: boolean,
    name: string,
    years: string,
    onPress: () => void
}

export type ActionListItemProps = {
    name: String;
    button: String;
    action: () => void;
}

export type ActionListFormProps = {
    options: Array<ActionListItemProps>,
    children?: React.ReactNode
}
export interface ActionListFormModalProps {
    visible: boolean;
    onRequestClose: () => void;
    options: Array<ActionListItemProps>
}

export type SettingsList = {
    icon: React.FC<SvgProps>,
    name: string,
    action: () => void,
    subRender?: React.ReactNode
}



// export type NativeStackHeaderPropsCustomRight =
//     NativeStackHeaderProps & {
//         route: RouteProp<{
//             params?: { rightButtons: HeaderRightButtons }
//         }, 'params'>
//     } | NativeStackHeaderProps

interface NSHPCR extends NativeStackHeaderProps {
    route: RouteProp<{
        params?: { rightButtons: HeaderRightButtons }
    }, 'params'>
}

export type NativeStackHeaderPropsCustomRight = NSHPCR | NativeStackHeaderProps