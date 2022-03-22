import React from 'react';
import {
    Text,
    TouchableOpacity,
    Image
} from 'react-native';
import icons from "../assets/icons"
import { colors, styleText, standartPadMar } from "../config/styles"
import { EpochProps } from "../types"


const Epoch = ({ imageUri, locked, name, years, onPress }: EpochProps) => {

    return (
        <TouchableOpacity
            onPress={onPress}
            style={{
                flexDirection: "column",
                alignContent: "center",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {locked && <icons.Locked
                fill={colors.textDark}
                width={standartPadMar * 1.2}
                height={standartPadMar * 1.2}
                style={{
                    position: "absolute",
                    top: 0,
                    left: 0
                }}
            />}
            <Image style={{
                width: '100%',
                aspectRatio: 1,
                height: 'auto',
                resizeMode: 'contain'
            }} source={imageUri} />
            <Text
                ellipsizeMode="tail"
                numberOfLines={1}
                style={styleText.mainTitle}
            >{name}</Text>
            <Text style={styleText.mainRegular}>{years}</Text>
        </TouchableOpacity>
    )
}

export default Epoch