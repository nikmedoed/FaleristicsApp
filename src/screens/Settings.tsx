import React from 'react';
import {
    SafeAreaView,
    ScrollView,
    StatusBar,
    StyleSheet,
    Text,
    useColorScheme,
    View,
    Button,
} from 'react-native';

import {
    Colors,
    DebugInstructions,
    Header,
    LearnMoreLinks,
    ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// import { } from '@react-navigation/native-stack';

import { colors, styleMain } from '../config/styles'

import { RootStackParamList } from '../types';
import type { NativeStackScreenProps } from '@react-navigation/native-stack';
type Props = NativeStackScreenProps<RootStackParamList, 'Settings'>;


const App = ({ navigation }: Props) => {
    return (
        <SafeAreaView style={{ backgroundColor: colors.backDark }}>
            <View style={styleMain.card}>
                <ScrollView>
                    <View style={{
                        paddingVertical: 15,
                        height: 1600,
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

                </ScrollView>

            </View>
        </SafeAreaView>
    );
};


export default App;
