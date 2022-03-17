import { StyleSheet, Platform } from 'react-native';
import font from "../assets/fonts"

export const colors = {
    backLight: "#FBFAFA",
    backLighter: "#FFFFFF",
    backDark: "#D8CFCC",

    textDark: "#2C2C44",
    textDarker: "#000000",
    textLight: "#FFFFFF",

    accentLight: "#DF7E7E",
    accentDark: "#425C59"
}

export const standartPadMar = 20
export const standartHitSlop = { top: 10, bottom: 10, left: 10, right: 10 }

export const fontSizeStep = 3
export const fontSize = 12
export const fontSizeTitle = fontSize + fontSizeStep

export const styleText = StyleSheet.create({
    mainTitle: {
        fontSize: fontSizeTitle,
        width: "100%",
        color: colors.textDark,
        fontFamily: font.ExtraBold,
        textAlign: "center"
    },
    mainRegular: {
        fontSize: fontSizeTitle,
        color: colors.textDark,
        fontFamily: font.Medium,
        opacity: 0.55
    },

    listTitle: {
        fontSize: fontSizeTitle,
        color: colors.textDark,
        fontFamily: font.Medium
    },

    infoTitle: {
        fontSize: fontSizeTitle,
        textTransform: 'uppercase',
        color: colors.textDark,
        fontFamily: font.Medium
    },
    infoTitleActive: {
        fontSize: fontSizeTitle,
        textTransform: 'uppercase',
        color: colors.accentDark,
        fontFamily: font.SemiBold

    },
    infoParagraph: {
        fontSize,
        color: colors.accentDark,
        fontFamily: font.Medium
    },

    title: {
        fontSize: fontSizeTitle,
        color: colors.accentDark,
        fontFamily: font.SemiBold
    },
    higlighted: {
        fontSize,
        color: colors.textDark,
        fontFamily: font.Bold,
    },
    paragraph: {
        fontSize,
        color: colors.textDark,
        fontFamily: font.Medium,
        opacity: 0.8
    },
    regular: {
        fontSize,
        color: colors.textDark,
        fontFamily: font.Regular,
        opacity: 0.7
    },
    button: {
        fontSize: fontSizeTitle,
        color: colors.textLight,
        fontFamily: font.Medium
    },
})

export const styleHeader = StyleSheet.create({
    back: {
        backgroundColor: colors.backDark,
        width: '100%',
        height: 50,
        paddingLeft: standartPadMar,
        paddingRight: standartPadMar,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between",
        paddingTop: Platform.OS === 'ios' ? 42 : 0,
    },
    title: {
        fontSize: standartPadMar,
        margin: 0,
        padding: 0,
        color: colors.textDark,
        fontFamily: font.Bold,
        textTransform: 'uppercase'
    },
    rightButtons: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        alignItems: "center"
    }
})

export const styleMain = StyleSheet.create({
    card: {
        borderTopEndRadius: standartPadMar,
        borderTopStartRadius: standartPadMar,
        height: "100%",
        paddingHorizontal: 15,
        backgroundColor: colors.backLight
    },
    ttttt: {
    },
    // ttttt: {
    // }
})
