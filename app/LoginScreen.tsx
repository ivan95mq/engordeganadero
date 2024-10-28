import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import axios from "axios";
import { COLORS, URL, API } from "@/constants/Constant";
import { User } from "@/constants/Interfaces";
import { useUserStore } from "../store/userStore";

const LoginScreen = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const setUserId = useUserStore((state) => state.setUserId);
  const handleLogin = async () => {
    if (!email || !password) {
      setError("Por favor, rellene todos los campos");
      return;
    }

    try {
      // Verifica que la URL y el token se impriman correctamente
      console.log("API URL:", URL);
      console.log("API Token:", API);
      const response = await axios.get(`${URL}api/users/`, {
        headers: {
          Authorization: `Bearer ${API}`,
        },
      });
      const user = response.data.find((u: User) => u.email === email);

      if (user) {
        // Guardar el userId en los parámetros locales
        setUserId(user.id);

        // Navegar a la página de usuario
        router.push("/UserDashboard");
      } else {
        setError("Usuario no encontrado");
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Verifica si el error proviene de Axios
        if (error.response) {
          // Respuesta recibida del servidor con un error (código 4xx o 5xx)
          console.error("Error en la respuesta del servidor:", error.response);
          setError(
            `Error en el servidor: ${
              error.response.data.message || "No se pudo iniciar sesión"
            }`
          );
        } else if (error.request) {
          // No se recibió respuesta, pero la solicitud fue enviada
          console.error("No se recibió respuesta del servidor:", error.request);
          setError("No se pudo conectar con el servidor");
        } else {
          // Error en la configuración de la solicitud
          console.error(
            "Error en la configuración de la solicitud:",
            error.message
          );
          setError("Error al configurar la solicitud");
        }
      } else {
        // Un error inesperado que no proviene de Axios
        console.error("Error desconocido:", error);
        setError("Ocurrió un error desconocido");
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/meat.png")}
        style={styles.headerImage}
      />
      <View style={styles.formContainer}>
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder="Introduce tu email"
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Introduce tu contraseña"
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.footerText}>¿Has olvidado la contraseña?</Text>
          <TouchableOpacity onPress={() => router.push("/RegistrationScreen")}>
            <Text style={styles.registerText}>Registrarse</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgBeige, // Color beige claro para el fondo
    alignItems: "center",
    justifyContent: "flex-start",
  },
  headerImage: {
    width: "70%",
    resizeMode: "contain",
    marginTop: 60,
  },
  formContainer: {
    width: "80%",
    marginTop: 20,
  },
  label: {
    fontSize: 16,
    color: "#000",
    marginBottom: 5,
  },
  input: {
    height: 50,
    backgroundColor: "#FFF",
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 20,
    borderColor: COLORS.borderGray,
    borderWidth: 1,
  },
  button: {
    backgroundColor: COLORS.verdeoscuro, // Verde oscuro
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 20,
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerText: {
    fontSize: 14,
    color: "#000",
  },
  registerText: {
    fontSize: 14,
    color: COLORS.verdeoscuro,
    fontWeight: "bold",
  },
  errorText: {
    color: "red",
    marginBottom: 15,
  },
});

export default LoginScreen;
