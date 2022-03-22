import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    View,
    Alert,
    TouchableOpacity
} from 'react-native';

import icons from "../assets/icons"
import images from "../assets/images"
import SplashScreen from 'react-native-splash-screen';

import { RootStackParamList } from '../types';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
type Props = NativeStackScreenProps<RootStackParamList, 'Epochs'>;

import Epoch from "../components/Epoch"
import { colors, standartPadMar, styleEpoch } from '../config/styles';


import { LogBox } from 'react-native';
import ActionListFormModal from '../components/SubscriptionFormModal';
import { productlist } from '../config/constants';

LogBox.ignoreLogs([
    'Non-serializable values were found in the navigation state',
]);

type EpochState = {
    subscriptionFormModalVisible: boolean
}
export default class EpochsScreen extends React.Component<Props, EpochState> {

    readonly state: EpochState = {
        subscriptionFormModalVisible: true,
    };


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

    subscriptionFormShow = () => { this.setState({ subscriptionFormModalVisible: true }) }

    subscriptionFormClose = () => { this.setState({ subscriptionFormModalVisible: false }) }

    render() {
        const { navigation } = this.props

        const { subscriptionFormModalVisible } = this.state;

        return (
            <SafeAreaView>
                <ActionListFormModal
                    visible={subscriptionFormModalVisible}
                    onRequestClose={this.subscriptionFormClose}
                    options={productlist}
                />
                <ScrollView style={styleEpoch.back}>
                    <View style={styleEpoch.list}>

                        {Array.from("123456").map((item) => {

                            const locked = Math.random() > 0.5
                            const onPress = locked
                                ? this.subscriptionFormShow
                                : () => navigation.navigate('EpochTypes')

                            return (<View key={item} style={styleEpoch.card}>
                                <Epoch
                                    locked={locked}
                                    imageUri={images.Ep}
                                    name={Math.random() > 0.5 ? "Временное правительство" : "Советский Союз"}
                                    years="1855-1881"
                                    onPress={onPress}
                                />
                            </View>)
                        })}
                    </View>
                </ScrollView>
                <TouchableOpacity
                    onPress={() => Alert.alert("search")}
                    style={styleEpoch.circle}
                >
                    <View style={styleEpoch.circleBack}></View>
                    <icons.Search
                        style={{ alignSelf: "center" }}
                        fill={colors.textLight}
                        width={standartPadMar * 1.6}
                        height={standartPadMar * 1.6}
                    ></icons.Search>
                </TouchableOpacity>
            </SafeAreaView>
        );
    };
}

// в кнопке с лупой по идее не дожно быть прозрачности, но там по озущениями 