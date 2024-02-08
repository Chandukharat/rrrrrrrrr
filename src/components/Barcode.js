import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { RNCamera } from 'react-native-camera';

const BarcodeScanner = () => {
    const [isCameraActive, setCameraActive] = useState(false);
    const [scannedBarcode, setScannedBarcode] = useState('');

    const handleBarcodeScanned = ({ data }) => {
        setScannedBarcode(data);
    };

    useEffect(() => {
        if (isCameraActive) {
            // Start scanning for barcodes
            const scanBarcode = setInterval(() => {
                if (scannedBarcode) {
                    // Barcode scanned, do something with the data
                    console.log('Scanned barcode:', scannedBarcode);
                    // You can perform further actions with the scanned data, such as making an API call or updating state.
                    setScannedBarcode('');
                }
            }, 500);

            return () => clearInterval(scanBarcode); // Clean up the interval on component unmount
        }
    }, [isCameraActive, scannedBarcode]);

    const toggleCamera = () => {
        setCameraActive(!isCameraActive);
    };

    return (
        <View style={styles.container}>
            {isCameraActive ? (
                <RNCamera
                    style={styles.preview}
                    type={RNCamera.Constants.Type.back}
                    onBarCodeRead={handleBarcodeScanned}
                    captureAudio={false}
                />
            ) : (
                <View style={styles.placeholder} />
            )}
            <View style={styles.overlay}>
                {isCameraActive ? (
                    <Text style={styles.scanText}>Scanning...</Text>
                ) : (
                    <Button title="Start Camera" onPress={toggleCamera} />
                )}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    preview: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',
        width: '100%',
    },
    placeholder: {
        flex: 1,
        width: '100%',
        backgroundColor: '#000',
    },
    overlay: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        justifyContent: 'center',
        alignItems:
            'center',
    },
    scanText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default BarcodeScanner;