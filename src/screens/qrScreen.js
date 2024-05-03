import React, { useEffect, useState, useRef } from 'react'
import { Text, View, TextInput, Image, TouchableOpacity, ToastAndroid, StyleSheet, SafeAreaView, Alert, Button, ActivityIndicator } from 'react-native'
import { CameraView, Camera } from "expo-camera/next";
import { useDispatch, useSelector } from 'react-redux'

import { readStart, readSuccess } from '../redux/qrSlice'
import qrService from '../services/qrService';

import styles from '../styles/qrScreen'

const QrScreen = () => {
    const dispatch = useDispatch();
    const loading = useSelector(state => state.qr.loading);

    const [hasPermission, setHasPermission] = useState(null);
    const [scanned, setScanned] = useState(false);

    useEffect(() => {
        const getCameraPermissions = async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status === "granted");
        };

        getCameraPermissions();
    }, []);

    const handleBarCodeScanned = async ({ type, data }) => {
        dispatch(readStart());
        setScanned(true);

        const dataObj = JSON.parse(data);
        const register = await qrService.register(dataObj);

        if (!register) {
            Alert.alert('¡Error!', 'No se pudo registrar el código QR', [
                {
                    text: 'Aceptar', onPress: () => {
                        dispatch(readSuccess());
                    }
                }
            ]);
        } else {
            Alert.alert('¡Bienvenido!', dataObj.nombre, [
                {
                    text: 'Aceptar', onPress: () => {
                        dispatch(readSuccess());
                    }
                }
            ]);
        }
    };

    if (hasPermission === null) {
        return <Text>Requesting for camera permission</Text>;
    }
    if (hasPermission === false) {
        return <Text>No access to camera</Text>;
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.camera}>
                <CameraView
                    onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
                    barcodeScannerSettings={{
                        barcodeTypes: ["qr", "pdf417"],
                    }}
                    style={{ flex: 1 }}
                />
            </View>
            <View>
                {
                    loading ?
                        <ActivityIndicator size="large" /> :
                        <TouchableOpacity style={styles.button} onPress={() => setScanned(false)}>
                            <Text>Scanner</Text>
                        </TouchableOpacity>
                }

            </View>

        </SafeAreaView>
    );
}

export default QrScreen;