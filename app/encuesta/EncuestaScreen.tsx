import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { useRouter } from 'expo-router';
import { COLORS } from '../../constants/Colors';

const EncuestaScreen = () => {
    const router = useRouter();
    const [responses, setResponses] = useState({
        waterSavingPlan: null,
        waterConsumptionLog: null,
        waterPressureSystem: null,
        externalSupply: null, // Changed from boolean to null for consistency
        manureRemoval: null,
        agriculturalProgram: null,
        manureBuried24h: null,
        manureBuriedUnder24h: null,
        dopCertification: null,
        carbonFootprintCertification: null,
        slowGrowthBreeds: null,
    });
    const [isSubmitEnabled, setIsSubmitEnabled] = useState(false);

    const handleCheckboxChange = (key: string, value: boolean) => {
        setResponses(prev => ({
            ...prev,
            [key]: value
        }));
    };

    useEffect(() => {
        // Check if all responses are filled (true or false)
        const allAnswered = Object.values(responses).every(response => response !== null);
        setIsSubmitEnabled(allAnswered);
    }, [responses]);

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image source={require('../../assets/images/meatverde.png')} style={styles.headerImage} />
                <TouchableOpacity onPress={() => router.push('/UserDashboard')}>
                    <Image source={require('../../assets/images/user_icon.png')} style={styles.userIcon} />
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>Certificaciones</Text>

            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>1. Denominación de origen protegida (DOP) o similar.</Text>
                <View style={styles.checkboxContainer}>
                    <Text>Si</Text>
                    <CheckBox value={responses.dopCertification === true} onValueChange={(newValue) => handleCheckboxChange('dopCertification', newValue)} />
                    <Text>No</Text>
                    <CheckBox value={responses.dopCertification === false} onValueChange={(newValue) => handleCheckboxChange('dopCertification', !newValue)} />
                </View>
            </View>

            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>2. Certificación de la huella de carbono.</Text>
                <View style={styles.checkboxContainer}>
                    <Text>Si</Text>
                    <CheckBox value={responses.carbonFootprintCertification === true} onValueChange={(newValue) => handleCheckboxChange('carbonFootprintCertification', newValue)} />
                    <Text>No</Text>
                    <CheckBox value={responses.carbonFootprintCertification === false} onValueChange={(newValue) => handleCheckboxChange('carbonFootprintCertification', !newValue)} />
                </View>
            </View>

            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>3. Razas de crecimiento lento.</Text>
                <View style={styles.checkboxContainer}>
                    <Text>Si</Text>
                    <CheckBox value={responses.slowGrowthBreeds === true} onValueChange={(newValue) => handleCheckboxChange('slowGrowthBreeds', newValue)} />
                    <Text>No</Text>
                    <CheckBox value={responses.slowGrowthBreeds === false} onValueChange={(newValue) => handleCheckboxChange('slowGrowthBreeds', !newValue)} />
                </View>
            </View>

            <Text style={styles.title}>Gestión del agua</Text>

            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>1. Existe un plan de ahorro de agua (potable y de limpieza).</Text>
                <View style={styles.checkboxContainer}>
                    <Text>Si</Text>
                    <CheckBox value={responses.waterSavingPlan === true} onValueChange={(newValue) => handleCheckboxChange('waterSavingPlan', newValue)} />
                    <Text>No</Text>
                    <CheckBox value={responses.waterSavingPlan === false} onValueChange={(newValue) => handleCheckboxChange('waterSavingPlan', !newValue)} />
                </View>
            </View>

            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>2. Existe un registro del consumo de agua.</Text>
                <View style={styles.checkboxContainer}>
                    <Text>Si</Text>
                    <CheckBox value={responses.waterConsumptionLog === true} onValueChange={(newValue) => handleCheckboxChange('waterConsumptionLog', newValue)} />
                    <Text>No</Text>
                    <CheckBox value={responses.waterConsumptionLog === false} onValueChange={(newValue) => handleCheckboxChange('waterConsumptionLog', !newValue)} />
                </View>
            </View>

            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>3. Existe un sistema de agua a presión para la limpieza.</Text>
                <View style={styles.checkboxContainer}>
                    <Text>Si</Text>
                    <CheckBox value={responses.waterPressureSystem === true} onValueChange={(newValue) => handleCheckboxChange('waterPressureSystem', newValue)} />
                    <Text>No</Text>
                    <CheckBox value={responses.waterPressureSystem === false} onValueChange={(newValue) => handleCheckboxChange('waterPressureSystem', !newValue)} />
                </View>
            </View>

            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>4. Necesidad de suministros externos en los últimos 10 años (rellene sólo 1 casilla)</Text>
                <View style={styles.checkboxContainer}>
                    <Text>1 verano</Text>
                    <CheckBox
                        value={responses.externalSupply === true}
                        onValueChange={(newValue) => handleCheckboxChange('externalSupply', newValue)}
                    />
                    <Text>2 o más veranos</Text>
                    <CheckBox
                        value={responses.externalSupply === false}
                        onValueChange={(newValue) => handleCheckboxChange('externalSupply', !newValue)}
                    />
                </View>
            </View>

            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>7. El estiércol se retira lo antes posible tras el acabado.</Text>
                <View style={styles.checkboxContainer}>
                    <Text>Si</Text>
                    <CheckBox value={responses.manureRemoval === true} onValueChange={(newValue) => handleCheckboxChange('manureRemoval', newValue)} />
                    <Text>No</Text>
                    <CheckBox value={responses.manureRemoval === false} onValueChange={(newValue) => handleCheckboxChange('manureRemoval', !newValue)} />
                </View>
            </View>

            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>8. Existe un programa agrícola para esparcir el estiércol (lugar, dosis, hora, fecha...)</Text>
                <View style={styles.checkboxContainer}>
                    <Text>Si</Text>
                    <CheckBox value={responses.agriculturalProgram === true} onValueChange={(newValue) => handleCheckboxChange('agriculturalProgram', newValue)} />
                    <Text>No</Text>
                    <CheckBox value={responses.agriculturalProgram === false} onValueChange={(newValue) => handleCheckboxChange('agriculturalProgram', !newValue)} />
                </View>
            </View>

            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>9. El estiércol se entierra lo antes posible &lt;24h.</Text>
                <View style={styles.checkboxContainer}>
                    <Text>Si</Text>
                    <CheckBox value={responses.manureBuried24h === true} onValueChange={(newValue) => handleCheckboxChange('manureBuried24h', newValue)} />
                    <Text>No</Text>
                    <CheckBox value={responses.manureBuried24h === false} onValueChange={(newValue) => handleCheckboxChange('manureBuried24h', !newValue)} />
                </View>
            </View>

            <View style={styles.questionContainer}>
                <Text style={styles.questionText}>10. El estiércol se entierra lo antes posible &lt;24h.</Text>
                <View style={styles.checkboxContainer}>
                    <Text>Si</Text>
                    <CheckBox value={responses.manureBuriedUnder24h === true} onValueChange={(newValue) => handleCheckboxChange('manureBuriedUnder24h', newValue)} />
                    <Text>No</Text>
                    <CheckBox value={responses.manureBuriedUnder24h === false} onValueChange={(newValue) => handleCheckboxChange('manureBuriedUnder24h', !newValue)} />
                </View>
            </View>

            <TouchableOpacity
                style={[styles.submitButton, { backgroundColor: isSubmitEnabled ? COLORS.verdeoscuro : COLORS.borderGray }]}
                onPress={() => {
                    if (isSubmitEnabled) {
                        console.log('Enviar Respuestas');
                    }
                }}
                disabled={!isSubmitEnabled}
            >
                <Text style={styles.submitButtonText}>Enviar Respuestas</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.bgBeige,
        padding: 20,
    },
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerImage: {
        width: 150,
        height: 50,
        resizeMode: 'contain',
    },
    userIcon: {
        width: 40,
        height: 40,
        resizeMode: 'contain',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.verdeoscuro,
        textAlign: 'center',
        marginBottom: 20,
    },
    questionContainer: {
        marginBottom: 20,
    },
    questionText: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    submitButton: {
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 20,
    },
    submitButtonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default EncuestaScreen;
