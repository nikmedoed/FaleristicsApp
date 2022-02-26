import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import { } from '@react-navigation/native-stack';

import { colors } from '../config/styles'

const App = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';


    return (
        <SafeAreaView style={{ backgroundColor: colors.backDark }}>
            <View
                style={{
                    borderTopEndRadius: 18,
                    borderTopStartRadius: 18,
                    height: "100%",
                    padding: 15,
                    justifyContent: "space-between",
                    backgroundColor: colors.backLight
                }}>
                <Button
                    title="Go back"
                    onPress={() => navigation.goBack()}
                />
                <Button
                    title="Go back"
                    onPress={() => navigation.goBack()}
                />
            </View>
        </SafeAreaView>
    );
};


export default App;
