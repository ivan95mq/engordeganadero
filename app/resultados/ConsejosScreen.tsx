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
import { COLORS } from "../../constants/Colors";

const ConsejosScreen = () => {
  const router = useRouter();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require("../../assets/images/meatverde.png")}
          style={styles.headerImage}
        />
        <TouchableOpacity onPress={() => console.log("Abrir menú usuario")}>
          <Image
            source={require("../../assets/images/user_icon.png")}
            style={styles.userIcon}
          />
        </TouchableOpacity>
      </View>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgBeige,
    padding: 20,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 20,
  },
  headerImage: {
    width: 150,
    height: 50,
    resizeMode: "contain",
  },
  userIcon: {
    width: 40,
    height: 40,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.verdeoscuro,
    textAlign: "center",
    marginBottom: 20,
  },
  adviceContainer: {
    paddingHorizontal: 10,
  },
  adviceText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 15,
  },
});

export default ConsejosScreen;
