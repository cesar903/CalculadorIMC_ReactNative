import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    formContext:{
        width:"100%",
        height:"100%",
        justifyContent:'space-around',
        backgroundColor:"#ffffff",
        alignItems:"center",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    form:{
        width:"100%",
        marginTop:30,
        padding: 10,
    },
    formLabel:{
        color:"#000",
        fontSize: 18,
        paddingLeft: 20,
    },
    input:{
        width:"50%",
        borderRadius:50,
        backgroundColor:"#f6f6f6",
        height:40,
        margin:12,
        paddingLeft:12,
    },
    textButtonCalculate:{
        fontSize: 20,
        color: "#fff"
    },
    buttonCalculate:{
        borderRadius: 50,
        alignItems:"center",
        justifyContent:"center",
        width:"90%",
        backgroundColor:"#ff0043",
        paddingTop: 14,
        paddingBottom: 14,
        marginLeft: 12,
        margintop: 30,

    },
    errorMessage:{
        fontSize: 10,
        color:"red",
        fontWeight: "bold",
        paddingLeft: 20,
    },
    exResult:{
        width:'100%',
        height:'40%'
    },
    listIMC:{
        marginTop: 20,
    },
    resultIMCItem:{
        fontSize:26,
        color:"red",
        height:50,
        width:"100%",
        paddingRight:20,
    },
    textResultIMCList:{
        color:"red",
        fontSize:16,
    }
});

export default styles