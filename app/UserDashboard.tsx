import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  FlatList,
} from "react-native";
import { useRouter, useLocalSearchParams } from "expo-router";
import axios from "axios";
import { COLORS, URL, API } from "../constants/Constant";
import { User } from "../constants/Interfaces";
import { useUserStore } from "../store/userStore";

const UserDashboard = () => {
  const router = useRouter();
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
      <View style={styles.loadingContainer}>
        <Text>Loading...</Text>
      </View>
    );
  }
  const handleLogout = () => {
    clearUserId(); // Limpiar el userId del store
    router.push("/LoginScreen"); // Navegar a la pantalla de login
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image
          source={require("../assets/images/meatverde.png")}
          style={styles.headerImage}
        />
        <TouchableOpacity onPress={() => console.log("Abrir menú usuario")}>
          <Image
            source={require("../assets/images/user_icon.png")}
            style={styles.userIcon}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.profileContainer}>
        <Image
          source={require("../assets/images/user_profile.png")}
          style={styles.profileImage}
        />
        <Text style={styles.profileName}>
          {user?.name || "Nombre no disponible"}
        </Text>
      </View>
      <View style={styles.menuContainer}>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => console.log("Información Personal")}
        >
          <Text style={styles.menuText}>Información Personal</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => console.log("Resultado del test")}
        >
          <Text style={styles.menuText}>Resultado del test</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.menuItem}
          onPress={() => console.log("Idiomas")}
        >
          <Text style={styles.menuText}>Idiomas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
          <Text style={styles.menuText}>Salir</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.testButton}
        onPress={() => router.push("/encuesta/EncuestaScreen")}
      >
        <Text style={styles.testButtonText}>
          Iniciar Test de Sostenibilidad
        </Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgBeige, // Color de fondo beige
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
  profileContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  profileName: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#000",
  },
  menuContainer: {
    marginBottom: 30,
  },
  menuItem: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  menuText: {
    textAlign: "center",
    alignContent: "center",
    fontSize: 18,
    color: "#000",
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  testButton: {
    backgroundColor: COLORS.verdeoscuro,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
  },
  testButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default UserDashboard;
