import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import { useRouter } from 'expo-router';
import { COLORS } from '../../constants/Colors';

const SelectForm = () => {
    const router = useRouter();
    const [selectedFarm, setSelectedFarm] = React.useState('');

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image source={require('../../assets/images/meatverde.png')} style={styles.headerImage} />
                <TouchableOpacity onPress={() => router.push('./UserDashboard')}>
                    <Image source={require('../../assets/images/user_icon.png')} style={styles.userIcon} />
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>Selecciona la finca con la cuál realizar hacer el test</Text>
            <View style={styles.pickerContainer}>
                <Picker
                    selectedValue={selectedFarm}
                    style={styles.picker}
                    onValueChange={(itemValue) => setSelectedFarm(itemValue)}
                >
                    <Picker.Item label="Finca 1" value="finca1" />
                    <Picker.Item label="Finca 2" value="finca2" />
                    <Picker.Item label="Finca 3" value="finca3" />
                </Picker>
            </View>
            <Text style={styles.questionText}>¿Eres ecológico?</Text>
            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.yesButton} onPress={() => router.push('/resultados/AdviceScreen2')}>
                    <Text style={styles.buttonText}>Sí</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.noButton} onPress={() => router.push('./EncuestaScreen')}>
                    <Text style={styles.buttonText}>No</Text>
                </TouchableOpacity>
            </View>
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
    pickerContainer: {
        marginBottom: 30,
        backgroundColor: '#FFF',
        borderRadius: 8,
        borderColor: COLORS.borderGray,
        borderWidth: 1,
    },
    picker: {
        height: 50,
        width: '100%',
    },
    questionText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginBottom: 20,
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    yesButton: {
        backgroundColor: COLORS.verdeclaro,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    noButton: {
        backgroundColor: COLORS.rojo,
        paddingVertical: 15,
        paddingHorizontal: 30,
        borderRadius: 8,
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default SelectForm;
