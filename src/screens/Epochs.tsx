import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet, Alert,
    Text,
    useColorScheme,
    View,
    Button
} from 'react-native';

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);

import icons from "../assets/icons"
import images from "../assets/images"
import SplashScreen from 'react-native-splash-screen';

import { RootStackParamList } from '../types';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
type Props = NativeStackScreenProps<RootStackParamList, 'Epochs'>;

import Epoch from "../components/Epoch"
import { colors, standartPadMar } from '../config/styles';

export default class EpochsScreen extends React.Component<Props> {

    componentDidMount() {
        const { navigation } = this.props
        // TODO Ругается на несериализуемые иконки. Надо бы как-то исправить
        navigation.setParams({
            rightButtons: [
                {
                    icon: icons.SearchNumber,
                    action: () => navigation.navigate("SearchNames")
                }, {
                    icon: icons.Menu,
                    action: () => navigation.navigate("Settings")
                }
            ]
        })
        SplashScreen.hide()
    }


    render() {
        const { navigation } = this.props
        return (
            <SafeAreaView style={{}}>
                <ScrollView
                    // contentInsetAdjustmentBehavior="automatic"
                    style={{
                        backgroundColor: colors.backDark,
                        height: '100%'

                    }}>
                    <View
                        style={{
                            flexDirection: 'row',
                            alignContent: 'space-around',
                            flexWrap: "wrap",
                            justifyContent: "center",
                            padding: standartPadMar / 2
                        }}>

                        {Array.from("123456").map(
                            (e, k) =>
                                <View style={{
                                    width: "50%",
                                    padding: standartPadMar / 2
                                }}>
                                    <Epoch
                                        locked={Math.random() > 0.5}
                                        key={k}
                                        imageUri={images.Ep}
                                        name={Math.random() > 0.5 ? "Временное правительство" : "Советский Союз"}
                                        years="1855-1881"
                                        onPress={() => navigation.navigate('EpochTypes')}
                                    />
                                </View>
                        )}

                    </View>
                </ScrollView>
            </SafeAreaView>
        );
    };
}
