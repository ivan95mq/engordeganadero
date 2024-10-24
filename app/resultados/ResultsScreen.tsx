import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { useRouter } from "expo-router";
import { COLORS } from "../../constants/Colors";
import TopBar from "@/components/TopBar";

const ResultsScreen = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <TopBar />
      <Text style={styles.title}>Resultado del test</Text>

      <View style={styles.resultContainer}>
        <Text style={styles.resultLabel}>Impacto medioambiental</Text>
        <View style={styles.chartContainer}>
          <Image
            source={require("../../assets/images/check.png")}
            style={styles.chartImage}
          />
          <Text style={styles.percentageText}>81%</Text>
        </View>
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.resultLabel}>Impacto social</Text>
        <View style={styles.chartContainer}>
          <Image
            source={require("../../assets/images/check.png")}
            style={styles.chartImage}
          />
          <Text style={styles.percentageText}>81%</Text>
        </View>
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.resultLabel}>Impacto económico</Text>
        <View style={styles.chartContainer}>
          <Image
            source={require("../../assets/images/check.png")}
            style={styles.chartImage}
          />
          <Text style={styles.percentageText}>81%</Text>
        </View>
      </View>

      <Text style={styles.totalScoreTitle}>Puntuación Total</Text>
      <Text style={styles.totalScore}>81%</Text>

      <TouchableOpacity
        style={styles.modifyButton}
        onPress={() => router.push("../encuesta/EncuestaScreen")}
      >
        <Text style={styles.modifyButtonText}>Modificar Respuestas</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => console.log("Mostrar consejos para mejorar")}
      >
        <Text style={styles.adviceLink}>Consejos para mejorar</Text>
      </TouchableOpacity>
    </View>
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
    fontSize: 24,
    color: COLORS.verdeoscuro,
    textAlign: "center",
    marginBottom: 20,
  },
  resultContainer: {
    alignItems: "center",
    marginBottom: 30,
  },
  resultLabel: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginBottom: 10,
  },
  chartContainer: {
    flexDirection: "column",
    alignItems: "center",
  },
  chartImage: {
    width: 100,
    height: 100,
    resizeMode: "contain",
  },
  percentageText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#000",
    marginTop: 10,
  },
  totalScoreTitle: {
    fontSize: 20,
    color: COLORS.verdeoscuro,
    textAlign: "center",
    marginTop: 20,
  },
  totalScore: {
    fontSize: 36,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
    marginBottom: 40,
  },
  modifyButton: {
    backgroundColor: COLORS.verdeoscuro,
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 20,
  },
  modifyButtonText: {
    color: "#ffffff",
    fontSize: 18,
    fontWeight: "bold",
  },
  adviceLink: {
    fontSize: 16,
    color: COLORS.verdeoscuro,
    textAlign: "center",
    textDecorationLine: "underline",
  },
});

export default ResultsScreen;
