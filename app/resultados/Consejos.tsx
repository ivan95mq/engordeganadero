import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import TopBar from "@/components/TopBar";
import { styles } from "@/constants/styles";

const Consejos = () => {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <TopBar />
      <Text style={styles.title}>Consejos para mejorar</Text>

      <View style={styles.adviceContainer}>
        <Text style={styles.adviceText}> ❗ CERTIFICACIONES</Text>
        <Text style={styles.adviceText}>GESTIÓN DEL AGUA</Text>
        <Text style={styles.adviceText}>ALIMENTACIÓN</Text>
        <Text style={styles.adviceText}>EFICIENCIA ENERGÉTICA</Text>
        <Text style={styles.adviceText}>
          {" "}
          ❗ CONTRIBUCIÓN SOCIOECONÓMICA AL TERRITORIO
        </Text>
        <Text style={styles.adviceText}>EMPRESA ASOCIADA A LA EXPLOTACIÓN</Text>
        <Text style={styles.adviceText}>GESTIÓN DE ANIMALES</Text>
        <Text style={styles.adviceText}>GESTIÓN DE DESECHOS Y RESIDUOS</Text>
      </View>
    </ScrollView>
  );
};

export default Consejos;
