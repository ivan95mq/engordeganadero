import React from "react";
import { View, Image, TouchableOpacity, StyleSheet } from "react-native";
import { COLORS } from "@/constants/Constant";
import { router } from "expo-router";

export default function TopBar() {
  return (
    <View style={styles.headerContainer}>
      <Image
        source={require("../assets/images/meat.png")}
        style={styles.headerImage}
      />
      <TouchableOpacity onPress={() => router.push("/UserDashboard")}>
        <Image
          source={require("../assets/images/user_icon.png")}
          style={styles.userIcon}
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
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
});
