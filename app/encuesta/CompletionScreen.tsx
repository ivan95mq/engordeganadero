import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS } from '../../constants/Colors';

const CompletionScreen = () => {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image source={require('../../assets/images/meatverde.png')} style={styles.headerImage} />
                <TouchableOpacity onPress={() => router.push('../UserDashboard')}>
                    <Image source={require('../../assets/images/user_icon.png')} style={styles.userIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.contentContainer}>
                <Image source={require('../../assets/images/check.png')} style={styles.checkImage} />
                <Text style={styles.congratulationsText}>Enhorabuena</Text>
                <Text style={styles.completionText}>Has completado el formulario</Text>
            </View>
            <TouchableOpacity style={styles.resultsButton} onPress={() => router.push('../resultados/ResultsScreen')}>
                <Text style={styles.resultsButtonText}>Ver resultados</Text>
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
    contentContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
        marginBottom: 20,
    },
    congratulationsText: {
        fontSize: 24,
        color: COLORS.verdeoscuro,
        marginBottom: 10,
    },
    completionText: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginBottom: 40,
    },
    resultsButton: {
        backgroundColor: COLORS.verdeoscuro,
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 20,
    },
    resultsButtonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
});

export default CompletionScreen;
