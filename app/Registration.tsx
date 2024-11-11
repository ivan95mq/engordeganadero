import React, { useState } from "react";
import {
  View,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useRouter } from "expo-router";
import { useTranslation } from "react-i18next";
import { styles } from "@/constants/styles";
import TopBar from "@/components/TopBar";

const Registration = () => {
  const router = useRouter();
  const { t } = useTranslation();

  // Estados para los campos del formulario
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [country, setCountry] = useState("");
  const [numFarms, setNumFarms] = useState("");
  const [farm1, setFarm1] = useState("");
  const [farm2, setFarm2] = useState("");

  const handleRegister = () => {
    // Lógica para enviar los datos del formulario a una API
    const registrationData = {
      name,
      surname,
      email,
      phone,
      address,
      city,
      province,
      country,
      numFarms,
      farm1,
      farm2,
    };

    console.log("Registration Data:", registrationData);
    // Aquí deberías hacer una llamada a la API usando fetch o axios para enviar los datos
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      keyboardShouldPersistTaps="handled"
    >
      <TopBar />
      <View style={styles.formContainer}>
        <Text style={styles.label}>{t("Nombre")}</Text>
        <TextInput style={styles.input} value={name} onChangeText={setName} />

        <Text style={styles.label}>{t("Apellidos")}</Text>
        <TextInput
          style={styles.input}
          value={surname}
          onChangeText={setSurname}
        />

        <Text style={styles.label}>{t("Email")}</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <Text style={styles.label}>{t("Teléfono")}</Text>
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={setPhone}
          keyboardType="phone-pad"
        />

        <Text style={styles.label}>{t("Dirección")}</Text>
        <TextInput
          style={styles.input}
          value={address}
          onChangeText={setAddress}
        />

        <Text style={styles.label}>{t("Ciudad")}</Text>
        <TextInput style={styles.input} value={city} onChangeText={setCity} />

        <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
          <View style={{ width: "48%" }}>
            <Text style={styles.label}>{t("Provincia")}</Text>
            <TextInput
              style={styles.input}
              value={province}
              onChangeText={setProvince}
            />
          </View>
          <View style={{ width: "48%" }}>
            <Text style={styles.label}>{t("País")}</Text>
            <TextInput
              style={styles.input}
              value={country}
              onChangeText={setCountry}
            />
          </View>
        </View>

        <Text style={styles.label}>{t("Nº de fincas")}</Text>
        <TextInput
          style={styles.input}
          value={numFarms}
          onChangeText={setNumFarms}
          keyboardType="numeric"
        />

        <Text style={styles.label}>{t("Finca 1")}</Text>
        <TextInput style={styles.input} value={farm1} onChangeText={setFarm1} />

        <Text style={styles.label}>{t("Finca 2")}</Text>
        <TextInput style={styles.input} value={farm2} onChangeText={setFarm2} />

        <TouchableOpacity style={styles.button} onPress={handleRegister}>
          <Text style={styles.buttonText}>{t("Registrarse")}</Text>
        </TouchableOpacity>

        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>
            {t("¿Y tienes cuenta?")}{" "}
            <TouchableOpacity onPress={() => router.push("/Login")}>
              <Text style={styles.registerText}>{t("Inicia Sesión")}</Text>
            </TouchableOpacity>
          </Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default Registration;
