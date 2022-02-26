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

import SplashScreen from 'react-native-splash-screen';

// import { } from '@react-navigation/native-stack';

const App = ({ navigation }) => {
    const isDarkMode = useColorScheme() === 'dark';

    const backgroundStyle = {
        backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    };

    SplashScreen.hide()

    return (
        <SafeAreaView style={backgroundStyle}>
            <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
            <ScrollView
                contentInsetAdjustmentBehavior="automatic"
                style={backgroundStyle}>
                <View
                    style={{
                        backgroundColor: isDarkMode ? Colors.black : Colors.white,
                    }}>
                    <Button
                        title="Go types"
                        onPress={() => navigation.navigate('EpochTypes')}
                    />
                    <Button
                        title="Go search"
                        onPress={() => navigation.navigate('Search')}
                    />
                    <Button
                        title="Go Settings"
                        onPress={() => navigation.navigate('Settings')}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};


export default App;
