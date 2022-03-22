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
    accentDark: "#425C59",

    unactive: "#F5F4F4",
    stroke: 'rgba(0, 0, 0, 0.08)',

    modalGrayColor: 'rgba(0,0,0,0.45)'

}

export const standartPadMar = 20
export const standartHitSlop = { top: 10, bottom: 10, left: 10, right: 10 }

export const fontSize = 15
export const fontSizeTitle = fontSize * 1.25

export const styleText = StyleSheet.create({
    mainTitle: {
        fontSize,
        width: "100%",
        color: colors.textDark,
        fontFamily: font.ExtraBold,
        textAlign: "center"
    },
    mainRegular: {
        fontSize,
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
        fontFamily: font.Medium,
    },
})

const border = {
    borderWidth: 1,
    borderColor: colors.stroke
}

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


export const styleEpoch = StyleSheet.create({
    circle: {
        width: standartPadMar * 3,
        height: standartPadMar * 3,
        borderRadius: 50,
        position: "absolute",
        bottom: standartPadMar * 1.5,
        right: standartPadMar * 1.5,
        alignItems: "center",
        justifyContent: "center",
        ...border
    },
    circleBack: {
        width: "100%",
        height: "100%",
        borderRadius: 50,
        backgroundColor: colors.accentDark,
        position: "absolute",
        opacity: 0.85,
        ...border,
        borderColor: colors.accentDark
    },
    closeButton: {
        position: "absolute",
        top: - standartPadMar * 0.5,
        right: - standartPadMar * 0.5,
    },
    back: {
        backgroundColor: colors.backDark,
        height: '100%'
    },
    list: {
        flexDirection: 'row',
        alignContent: 'space-around',
        flexWrap: "wrap",
        justifyContent: "center",
        padding: standartPadMar / 2
    },
    card: {
        width: "50%",
        padding: standartPadMar / 2
    }
})


export const styleMisc = StyleSheet.create({
    optionsIconLine: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    optionsLine: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    optionsButton: {
        borderRadius: 100,
        // backgroundColor: colors.accentLight,
        paddingVertical: standartPadMar / 3,
        width: standartPadMar * 6,
        alignItems: 'center',
        ...border
    },
    optionsButtonBackdround: {
        backgroundColor: colors.accentLight,
        position: "absolute",
        top: 0,
        bottom: 0,
        width: "100%",
        borderRadius: 100,
        ...border,
        borderColor: colors.accentLight
    },

})


export const styleMain = StyleSheet.create({
    page: {
        borderTopEndRadius: standartPadMar,
        borderTopStartRadius: standartPadMar,
        height: "100%",
        paddingHorizontal: standartPadMar,
        backgroundColor: colors.backLight
    },
    pageContent: {
        paddingVertical: standartPadMar
    },
    card: {
        width: '100%',
        padding: standartPadMar,
        backgroundColor: colors.backLighter,
        borderRadius: standartPadMar,
        borderColor: colors.stroke,
        borderWidth: 1,
    },
    lineDivider: {
        borderBottomWidth: 1,
        borderColor: colors.stroke,
        marginVertical: standartPadMar / 2
    },
    fullScreen: {
        width: '100%',
        height: '100%',
        position: 'absolute',
    },
    centered: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    modalBack: {
        backgroundColor: colors.modalGrayColor,
        padding: standartPadMar / 2
    }
    //   ttttt: {
    //   },
    //   ttttt: {
    //   }
})
