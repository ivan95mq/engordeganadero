import React from "react";
import {
  ImageBackground,
  Image,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useRouter } from "expo-router";
import { COLORS } from "@/constants/Colors";

const HomeScreen = () => {
  const router = useRouter();

  return (
    <ImageBackground
      source={require("../assets/images/gallina.jpg")}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Image
          source={require("../assets/images/meatverde.png")}
          style={styles.title}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/ConsejosScreen")}
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>¿No tienes cuenta?</Text>
          <TouchableOpacity onPress={() => router.push("/RegistrationScreen")}>
            <Text style={styles.registerText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require("../assets/images/european.png")}
          style={styles.euImage}
        />
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover", // Esto hace que la imagen se ajuste al tamaño del contenedor
    justifyContent: "center", // Centra verticalmente
    alignItems: "center", // Centra horizontalmente
  },
  container: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
    paddingBottom: 50,
  },
  title: {
    width: "70%",
    resizeMode: "contain",
    marginBottom: 30,
  },
  button: {
    backgroundColor: COLORS.verdeoscuro,
    borderRadius: 8,
    paddingVertical: 15,
    paddingHorizontal: 60,
    marginVertical: 20,
  },
  buttonText: {
    color: COLORS.White,
    fontSize: 18,
    fontWeight: "bold",
  },
  footerContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  footerText: {
    fontSize: 16,
    color: COLORS.Black,
  },
  registerText: {
    fontSize: 16,
    color: COLORS.Black,
    fontWeight: "bold",
    textDecorationLine: "underline",
    marginLeft: 5,
  },
  euImage: {
    width: 150,
    height: 50,
    resizeMode: "contain",
    marginTop: 20,
  },
});

export default HomeScreen;
