import React, {Component} from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { BarCodeScanner } from "expo-barcode-scanner";
import * as Permissions from "expo-permissions";

export default class TransactionScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            domState: "normal",
            hasCameraPermissions: null,
            scanned: false,
            scannedData: ""
        }
    }

    getCameraPermissions = async domState => {
        const {status} = await Permissions.askAsync(Permissions.CAMERA);

        this.setState({ //granted -> usuário permitiu
            hasCameraPermissions: status === "granted",
            domState: domState,
            scanned: false
        })
    }

    handleBarCodeScanned = async ({type, data}) => {
        this.setState({
            scannedData: data,
            domState: "normal",
            scanned: true
        })
    }

    render(){
        const {domState, hasCameraPermissions, scannedData, scanned} = this.state;
        if(domState === "scanner"){
            return(
                <BarCodeScanner onBarCodeScanned={scanned ? undefined : this.handleBarCodeScanned}
                                style={StyleSheet.absoluteFillObject}/>
            )
        }
        return(
            <View style={styles.container}>
            <Text style={styles.text}>
            {hasCameraPermissions ? scannedData : "Solicitar permissão para a câmera"}
            </Text>
            <TouchableOpacity style={styles.button}
                              onPress={()=> this.getCameraPermissions("scanner")}>
            <Text style={styles.buttonText}>
            Digitalizar QR Code
            </Text>
            </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#5653D4"
    },
    buttonText:{
        color: "#fff",
        fontSize: 30
    },
    button: {
        width: "43%",
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F48D20",
        borderRadius: 15
    },
    text: {
        color: "#fff",
        fontSize: 25
    }
})