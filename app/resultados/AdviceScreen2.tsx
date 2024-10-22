import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useRouter } from 'expo-router';
import { COLORS } from '../../constants/Colors';
import { AntDesign } from '@expo/vector-icons';

const ResultsScreen = () => {
    const router = useRouter();
    const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({});

    const toggleSection = (section: string) => {
        setExpandedSections(prevState => ({
            ...prevState,
            [section]: !prevState[section],
        }));
    };

    return (
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <Image source={require('../../assets/images/meatverde.png')} style={styles.headerImage} />
                <TouchableOpacity onPress={() => console.log('Abrir menú usuario')}>
                    <Image source={require('../../assets/images/user_icon.png')} style={styles.userIcon} />
                </TouchableOpacity>
            </View>
            <Text style={styles.title}>Resultado del test</Text>

            <View style={styles.resultContainer}>
                <Text style={styles.resultLabel}>Impacto medioambiental</Text>
                <View style={styles.chartContainer}>
                    <Image source={require('../../assets/images/check.png')} style={styles.chartImage} />
                    <Text style={styles.percentageText}>81%</Text>
                </View>
            </View>

            <View style={styles.resultContainer}>
                <Text style={styles.resultLabel}>Impacto social</Text>
                <View style={styles.chartContainer}>
                    <Image source={require('../../assets/images/check.png')} style={styles.chartImage} />
                    <Text style={styles.percentageText}>81%</Text>
                </View>
            </View>

            <View style={styles.resultContainer}>
                <Text style={styles.resultLabel}>Impacto económico</Text>
                <View style={styles.chartContainer}>
                    <Image source={require('../../assets/images/check.png')} style={styles.chartImage} />
                    <Text style={styles.percentageText}>81%</Text>
                </View>
            </View>

            <Text style={styles.totalScoreTitle}>Puntuación Total</Text>
            <Text style={styles.totalScore}>81%</Text>


            {/* Collapsible Sections Example */}
            <View style={styles.adviceContainer}>
                <Text style={styles.sectionTitle}>Certificaciones</Text>
                <TouchableOpacity onPress={() => toggleSection('section1')} style={styles.sectionHeader}>
                    <Text style={styles.sectionHeaderText}>1. Denominación de origen protegida (DOP) o similar.</Text>
                    <AntDesign name={expandedSections['section1'] ? 'up' : 'down'} size={16} color="black" />
                </TouchableOpacity>
                {expandedSections['section1'] && (
                    <Text style={styles.sectionContent}>Una denominación de origen protegida certifica la calidad y características de los productos vinculados al medio de producción.</Text>
                )}

                <TouchableOpacity onPress={() => toggleSection('section2')} style={styles.sectionHeader}>
                    <Text style={styles.sectionHeaderText}>2. Certificación de la huella de carbono.</Text>
                    <AntDesign name={expandedSections['section2'] ? 'up' : 'down'} size={16} color="black" />
                </TouchableOpacity>
                {expandedSections['section2'] && (
                    <Text style={styles.sectionContent}>La certificación de la huella de carbono garantiza la reducción de emisiones a través de prácticas sostenibles.</Text>
                )}

                <TouchableOpacity onPress={() => toggleSection('section3')} style={styles.sectionHeader}>
                    <Text style={styles.sectionHeaderText}>3. Razas de crecimiento lento.</Text>
                    <AntDesign name={expandedSections['section3'] ? 'up' : 'down'} size={16} color="black" />
                </TouchableOpacity>
                {expandedSections['section3'] && (
                    <Text style={styles.sectionContent}>Las razas de crecimiento lento promueven el bienestar animal y una producción más sostenible.</Text>
                )}
            </View>

            <TouchableOpacity style={styles.backButton} onPress={() => router.back()}>
                <Text style={styles.backButtonText}>Atrás</Text>
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
        fontSize: 24,
        color: COLORS.verdeoscuro,
        textAlign: 'center',
        marginBottom: 20,
    },
    resultContainer: {
        alignItems: 'center',
        marginBottom: 30,
    },
    resultLabel: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginBottom: 10,
    },
    chartContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    chartImage: {
        width: 100,
        height: 100,
        resizeMode: 'contain',
    },
    percentageText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 10,
    },
    totalScoreTitle: {
        fontSize: 20,
        color: COLORS.verdeoscuro,
        textAlign: 'center',
        marginTop: 20,
    },
    totalScore: {
        fontSize: 36,
        fontWeight: 'bold',
        color: '#000',
        textAlign: 'center',
        marginBottom: 40,
    },
    modifyButton: {
        backgroundColor: COLORS.verdeoscuro,
        paddingVertical: 15,
        borderRadius: 8,
        alignItems: 'center',
        marginVertical: 20,
    },
    modifyButtonText: {
        color: '#ffffff',
        fontSize: 18,
        fontWeight: 'bold',
    },
    adviceLink: {
        fontSize: 16,
        color: COLORS.verdeoscuro,
        textAlign: 'center',
        textDecorationLine: 'underline',
    },
    adviceContainer: {
        marginVertical: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: COLORS.verdeoscuro,
        marginBottom: 10,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    sectionHeaderText: {
        fontSize: 16,
        color: '#000',
    },
    sectionContent: {
        fontSize: 14,
        color: '#000',
        paddingVertical: 10,
    },
    backButton: {
        marginTop: 20,
    },
    backButtonText: {
        fontSize: 16,
        color: COLORS.verdeoscuro,
        textAlign: 'left',
    },
});

export default ResultsScreen;
