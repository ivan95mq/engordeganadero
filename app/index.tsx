import React from "react";
import {
  ImageBackground,
  Image,
  Text,
  View,
  TouchableOpacity,
} from "react-native";
import { useTranslation } from "react-i18next";
import { useRouter } from "expo-router";
import { styles } from "@/constants/styles";

const Home: React.FC = () => {
  const router = useRouter();
  const { t } = useTranslation();

  return (
    <ImageBackground
      source={require("../assets/images/gallina.jpg")}
      style={styles.containerimg}
    >
      <View style={styles.containerimg}>
        <Image
          source={require("../assets/images/meatverde.png")}
          style={styles.title}
        />
        <TouchableOpacity
          style={styles.button}
          onPress={() => router.push("/Login")}
        >
          <Text style={styles.buttonText}>{t("login")}</Text>
        </TouchableOpacity>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>¿No tienes cuenta?</Text>
          <TouchableOpacity onPress={() => router.push("/Registration")}>
            <Text style={styles.registerText}>{t("signup")}</Text>
          </TouchableOpacity>
        </View>
        <Image source={require("../assets/images/european.png")} />
      </View>
    </ImageBackground>
  );
};

export default Home;
