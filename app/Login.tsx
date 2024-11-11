import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import { useTranslation } from "react-i18next";
import { useRouter } from "expo-router";
import axios from "axios";
import { styles } from "@/constants/styles";
import { URL, API } from "@/constants/Constant";
import { User } from "@/constants/Interfaces";
import { useUserStore } from "../store/userStore";

const Login = () => {
  const router = useRouter();
  const { t } = useTranslation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const setUserId = useUserStore((state) => state.setUserId);
  const handleLogin = async () => {
    if (!email || !password) {
      setError(t("Por favor, rellene todos los campos"));
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
        setError(t("no_data"));
      }
    } catch (error) {
      if (axios.isAxiosError(error)) {
        // Verifica si el error proviene de Axios
        if (error.response) {
          // Respuesta recibida del servidor con un error (código 4xx o 5xx)
          console.error("Error en la respuesta del servidor:", error.response);
          setError(
            `Error en el servidor: ${
              error.response.data.message || t("No se pudo iniciar sesión")
            }`
          );
        } else if (error.request) {
          // No se recibió respuesta, pero la solicitud fue enviada
          console.error("No se recibió respuesta del servidor:", error.request);
          setError(t("No se pudo conectar con el servidor"));
        } else {
          // Error en la configuración de la solicitud
          console.error(
            "Error en la configuración de la solicitud:",
            error.message
          );
          setError(t("Error al configurar la solicitud"));
        }
      } else {
        // Un error inesperado que no proviene de Axios
        console.error("Error desconocido:", error);
        setError(t("error"));
      }
    }
  };

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/meatverde.png")}
        style={styles.title}
      />

      <View style={styles.formContainer}>
        <Text style={styles.label}>{t("email")}</Text>
        <TextInput
          style={styles.input}
          placeholder={t("email")}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>{t("password")}</Text>
        <TextInput
          style={styles.input}
          placeholder={t("password")}
          secureTextEntry
          value={password}
          onChangeText={setPassword}
        />

        {error ? <Text style={styles.errorText}>{error}</Text> : null}

        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/UserDashboard")}
        >
          <Text style={styles.buttonText}>{t("login")}</Text>
        </TouchableOpacity>

        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>{t("forgot_password")}</Text>
          <TouchableOpacity onPress={() => router.push("/Registration")}>
            <Text style={styles.registerText}>{t("Registrarse")}</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Login;
