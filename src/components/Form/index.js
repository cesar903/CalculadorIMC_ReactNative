import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity, Vibration, Pressable, Keyboard, FlatList } from "react-native";
import ResultIMC from "./ResultIMC/";
import styles from "./style";

export default function Form() {

    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageIMC, setMessageIMC] = useState("Preencha o Peso e altura")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Calcular")
    const [erroMessage, setErrorMessage] = useState(null)
    const [imcList, SetImcList] = useState([])

    function imcCalculator() {
        let heightFormat = height.replace(",", ".")
        let totalIMC = (weight / (heightFormat * heightFormat)).toFixed(2)
        SetImcList((arr) => [...arr, { id: new Date().getTime(), imc: totalIMC }])
        setImc(totalIMC)
    }
    function verificationIMC() {
        if (imc == null) {
            setErrorMessage("Campo Obrigatório*")
            Vibration.vibrate();
        }
    }
    function validationIMC() {
        if (weight != null && height != null) {
            imcCalculator()
            setHeight(null)
            setWeight(null)
            setMessageIMC("Seu IMC é igual à: ")
            setTextButton("Calcular Novamente")
            setErrorMessage(null)
        } else {
            verificationIMC()
            setImc(null)
            setTextButton("Calcular")
            setMessageIMC("Preencha o Peso e a Altura")
        }
    }
    return (
        <View style={styles.formContext}>
            {imc == null ?
                <Pressable onPress={Keyboard.dismiss} style={styles.form}>
                    <Text style={styles.formLabel}>Altura</Text>
                    <Text style={styles.errorMessage}>{erroMessage}</Text>
                    <TextInput placeholder="Ex: 1.75" keyboardType="numeric" onChangeText={setHeight} value={height} style={styles.input} />
                    <Text style={styles.formLabel}>Peso</Text>
                    <Text style={styles.errorMessage}>{erroMessage}</Text>
                    <TextInput placeholder="Ex: 70" keyboardType="numeric" onChangeText={setWeight} value={weight} style={styles.input} />
                    <TouchableOpacity style={styles.buttonCalculate} onPress={() => validationIMC()} >
                        <Text style={styles.textButtonCalculate}>{textButton}</Text>
                    </TouchableOpacity>
                </Pressable>
                :
                <View style={styles.exResult}>
                    <ResultIMC messageResultIMC={messageIMC} resultIMC={imc} />
                    <TouchableOpacity style={styles.buttonCalculate} onPress={() => validationIMC()} >
                        <Text style={styles.textButtonCalculate}>{textButton}</Text>
                    </TouchableOpacity>
                </View>
            }
            <FlatList style={styles.listIMC} 
            showsVerticalScrollIndicator={false}
            data={[...imcList].reverse()} 
            renderItem={({ item }) => {
                return (
                    <Text style={styles.resultIMCItem}>
                        <Text style={styles.textResultIMCList}>Resultado IMC = </Text>
                        {item.imc}
                    </Text>

                )
            }}
                keyExtractor={(item) => { item.id }} />

        </View>


    )
}