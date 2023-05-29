import React from "react";
import { View, Text, TouchableOpacity, Share } from "react-native";
import styles from "./style";

export default function ResultIMC(props) {

    const onShare = async () => {
        const result = await Share.share({
            message: "Meu IMC é: " + props.resultIMC
        })
    }
    return (
        <View style={styles.resultIMC}>
            <View style={styles.boxSharebutton}>
                <Text style={styles.information}>{props.messageResultIMC}</Text>
                <Text style={styles.numberIMC}>{props.resultIMC}</Text>
                <TouchableOpacity style={styles.shared} onPress={onShare}>
                    <Text style={styles.sharedText}>
                        Share
                    </Text>
                </TouchableOpacity>
            </View>

        </View>
    )
}