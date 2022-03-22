import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    Text,
    View,
    Alert,
    Share,
    TouchableOpacity,
} from 'react-native';

import { colors, standartPadMar, styleMain, styleMisc, styleText, fontSize } from '../config/styles'

import { RootStackParamList } from '../types';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
import ActionListForm from "../components/SubscriptionList"
import icons from '../assets/icons';
import LineDivider from '../components/LineDivider';
import strings from '../config/strings';
import sendMail from '../utils/mailto';
import { alertNotImplemented, appShareLink, productlist } from '../config/constants';

type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;


const SettingsScreen = ({ navigation }: Props) => {

    const settingsList = [
        {
            icon: icons.Mail, name: strings.settingsStings.mail,
            action: () => sendMail()
        },
        {
            icon: icons.Share, name: strings.settingsStings.share,
            action: async () => Share.share({
                message: `${strings.settingsStings.shareMessage}\n\n${appShareLink}`,
                title: strings.settingsStings.shareTitle,
            }).catch(() => Alert.alert(strings.settingsStings.shareError))
        },
        {
            icon: icons.Export, name: strings.settingsStings.export,
            action: () => alertNotImplemented()
        },
        {
            icon: icons.Reload, name: strings.settingsStings.reload,
            action: () => alertNotImplemented(),
            subRender: undefined
        },
        {
            icon: icons.Chache, name: strings.settingsStings.chache,
            action: () => alertNotImplemented(),
            subRender: undefined
        },

    ]
    const iconSize = fontSize * 2

    return (
        <SafeAreaView style={{ backgroundColor: colors.backDark }}>
            <View style={styleMain.page}>
                <ScrollView>
                    <View style={{
                        paddingVertical: 15,
                        flexDirection: "column",
                        backgroundColor: colors.backLight
                    }}>
                        <View style={styleMain.pageContent} >
                            {LineDivider(
                                settingsList.map<React.ReactNode>((item, position) => (
                                    <TouchableOpacity
                                        key={'SettingsList' + position}
                                        style={styleMisc.optionsIconLine}
                                        onPress={item.action}
                                    >
                                        <item.icon
                                            width={iconSize}
                                            height={iconSize}
                                            fill={colors.textDark}
                                        />
                                        <Text style={[
                                            styleText.regular,
                                            { marginLeft: standartPadMar }
                                        ]}>
                                            {item.name}
                                        </Text>
                                    </TouchableOpacity>
                                )),
                                { marginLeft: iconSize + standartPadMar / 2 }
                            )}
                        </View>
                        <ActionListForm options={productlist} />
                    </View>

                </ScrollView>

            </View>
        </SafeAreaView>
    );
};


export default SettingsScreen;