import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, Image, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
import axios from "axios";
import { useTranslation } from "react-i18next";
import { COLORS, URL, API } from "@/constants/Constant";
import { User } from "@/constants/Interfaces";
import { useUserStore } from "../store/userStore";
import TopBar from "@/components/TopBar";

const UserDashboard = () => {
  const router = useRouter();
  const { t } = useTranslation();
  // Obtener userId de los parámetros
  const userId = useUserStore((state) => state.userId);
  const clearUserId = useUserStore((state) => state.clearUserId);

  // Asegurarse de que userId se convierte a un tipo de dato correcto
  const userIdNumber =
    typeof userId === "string" ? parseInt(userId, 10) : userId;
  console.log("userId recibido:", userIdNumber);

  const [user, setUser] = useState<User>();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Verificar si userId está definido antes de hacer la petición
    if (userIdNumber) {
      const fetchUser = async () => {
        try {
          const response = await axios.get(`${URL}api/users/${userIdNumber}`, {
            headers: {
              Authorization: `Bearer ${API}`,
            },
          });
          setUser(response.data);
        } catch (error) {
          console.error("Error fetching user:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchUser();
    } else {
      console.error("No userId found in the parameters");
      setLoading(false);
    }
  }, [userIdNumber]);

  if (loading) {
    return (
      <View style={styles.container}>
        <Text style={styles.profileName}>{t("Loading...")}</Text>
      </View>
    );
  }

  const handleLogout = () => {
    clearUserId(); // Limpiar el userId del store
    router.push("/Login"); // Navegar a la pantalla de login
  };

  return (
    <View style={styles.container}>
      <TopBar />
      <View style={styles.profileContainer}>
        <Image
          source={require("../assets/images/user_profile.png")}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>
          {user?.name || t("Nombre no disponible")}
        </Text>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => console.log("Información Personal")}
        >
          <Text style={styles.menuText}>{t("Información Personal")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => console.log("Resultado del test")}
        >
          <Text style={styles.menuText}>{t("Resultado del test")}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => router.push("/LanguageSelection")}
        >
          <Text style={styles.menuText}>{t("Idiomas")}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
          <Text style={styles.menuText}>{t("Salir")}</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/encuesta/Encuesta")}
      >
        <Text style={styles.buttonText}>
          {t("Iniciar Test de Sostenibilidad")}
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgBeige,
    padding: 20,
    paddingBottom: 50,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  headerContainer: {
    flexDirection: "row",
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 20,
    paddingHorizontal: 10,
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
  profileContainer: {
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: COLORS.bgBeige,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    color: COLORS.black,
  },
  menuContainer: {
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  menuItem: {
    width: "100%",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.borderGray,
    alignItems: "center",
  },
  menuText: {
    fontSize: 18,
    color: COLORS.black,
  },
  button: {
    backgroundColor: COLORS.verdeoscuro,
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 8,
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonText: {
    color: COLORS.white,
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default UserDashboard;
